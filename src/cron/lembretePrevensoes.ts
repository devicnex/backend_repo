import cron from "node-cron";
import { BuscarTokenService } from "../services/notification/buscaTokenService";
import { PrevencoesService } from "../services/notification/ChamarPrevencoes";
import axios from "axios";

const LEMBRETES = [
    { tipo: "5dias", diasAntes: 5, mensagem: "Atenção! A prevenção vence em 5 dias!" },
    { tipo: "1dia", diasAntes: 1, mensagem: "Está chegando a hora de renovar! A prevenção vence amanhã." }
];

const converterParaData = (dataString: string): Date => {
    if (!dataString) throw new Error("Data inválida!");

    let dia, mes, ano;
    if (dataString.includes("/")) {
        [dia, mes, ano] = dataString.split("/").map(Number);
    } else if (dataString.includes("-")) {
        [dia, mes, ano] = dataString.split("-").map(Number);
    } else {
        throw new Error(`Formato de data inválido: ${dataString}`);
    }

    const dataConvertida = new Date(ano, mes - 1, dia, 0, 0, 0);

    if (isNaN(dataConvertida.getTime())) {
        throw new Error(`❌ Erro ao converter data: ${dataString}`);
    }

    return dataConvertida;
};

export const prevencaoLembrete = cron.schedule("0 9 * * *", async () => {
    try {
        console.log("🔄 Executando cron para lembretes de prevenções...");

        const tokenService = new BuscarTokenService();
        const prevencoesService = new PrevencoesService();
        const agora = new Date();

        const prevencoes = await prevencoesService.buscarTodasPrevencoes();

        if (!Array.isArray(prevencoes) || prevencoes.length === 0) {
            console.log("⚠️ Nenhuma prevenção encontrada.");
            return;
        }

        for (const prevencao of prevencoes) {
            if (!prevencao.proxima_aplicacao || !prevencao.pets?.user_id) {
                console.warn(`⚠️ Prevenção ID ${prevencao.id} incompleta. Pulando...`);
                continue;
            }

            let dataPrevencao: Date;
            try {
                dataPrevencao = converterParaData(String(prevencao.proxima_aplicacao));
            } catch (error) {
                console.error(`❌ Erro ao converter data da prevenção ID ${prevencao.id}:`, error);
                continue;
            }

            // Normaliza as datas para 00:00h (considerar apenas a data, sem horário)
            const agoraNormalizado = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
            const dataPrevencaoNormalizada = new Date(dataPrevencao.getFullYear(), dataPrevencao.getMonth(), dataPrevencao.getDate());

            // Calcula a diferença em dias exatos (inteiros)
            const diferencaEmDias = Math.round((dataPrevencaoNormalizada.getTime() - agoraNormalizado.getTime()) / (1000 * 60 * 60 * 24));

            for (const lembrete of LEMBRETES) {
                if (diferencaEmDias === lembrete.diasAntes) {
                    const jaEnviada = await prevencoesService.verificarNotificacaoEnviada(prevencao.id, lembrete.tipo);
                    if (jaEnviada) {
                        console.log(`⚠️ Notificação "${lembrete.tipo}" já enviada para ID ${prevencao.id}.`);
                        continue;
                    }

                    const tokenUsuario = await tokenService.getTokenByUserId(prevencao.pets.user_id);
                    if (!tokenUsuario?.token) {
                        console.warn(`⚠️ Usuário ID ${prevencao.pets.user_id} sem token. Pulando...`);
                        continue;
                    }

                    try {
                        const response = await axios.post("https://petland.vet.br/api/sendNotification", {
                            token: tokenUsuario.token,
                            title: "Lembrete de Prevenção",
                            body: lembrete.mensagem
                        });

                        if (response.status === 200) {
                            console.log(`✅ Notificação "${lembrete.tipo}" enviada para ID ${prevencao.id}.`);
                            await prevencoesService.registrarNotificacao(prevencao.id, lembrete.tipo);
                        } else {
                            console.warn(`⚠️ Erro ao enviar notificação "${lembrete.tipo}" para ID ${prevencao.id}:`, response.data);
                        }
                    } catch (error) {
                        console.error("❌ Erro ao chamar API de notificação:", error);
                    }
                }
            }
        }
    } catch (error) {
        console.error("❌ Erro ao processar lembretes de prevenção:", error);
    }
});
