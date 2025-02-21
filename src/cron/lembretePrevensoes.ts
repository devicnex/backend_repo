import cron from "node-cron";
import { BuscarTokenService } from "../services/notification/buscaTokenService";
import { PrevencoesService } from "../services/notification/ChamarPrevencoes";
import axios from "axios";

// 🔹 Configuração dos lembretes e tempos antes da aplicação
const LEMBRETES = [
    { tipo: "5dias", tempoAntes: 5 * 24 * 60 * 60 * 1000, mensagem: "Atenção! A prevenção vence em 5 dias!" },
    { tipo: "1dia", tempoAntes: 1 * 24 * 60 * 60 * 1000, mensagem: "Está chegando a hora de renovar! A prevenção vence amanhã." }
];

// ✅ Função para converter data no formato dd/mm/aaaa ou dd-mm-aaaa para Date
const converterParaData = (dataString: string): Date => {
    if (!dataString) {
        throw new Error("Data inválida!");
    }

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

    console.log(`📆 Data convertida com sucesso: ${dataConvertida}`);
    return dataConvertida;
};

// 🔹 Cron para verificar e enviar notificações das prevenções
export const prevencaoLembrete = cron.schedule("*/10 * * * * *", async () => {
    try {
        console.log("🔄 Executando cron para lembretes de prevenções...");

        const tokenService = new BuscarTokenService();
        const prevencoesService = new PrevencoesService();
        const agora = new Date();

        // ✅ Buscar todas as prevenções que ainda não venceram
        const prevencoes = await prevencoesService.buscarTodasPrevencoes();

        if (!Array.isArray(prevencoes) || prevencoes.length === 0) {
            console.log("⚠️ Nenhuma prevenção encontrada.");
            return;
        }

        console.log(`✅ ${prevencoes.length} prevenções encontradas.`);

        for (const prevencao of prevencoes) {
            if (!prevencao.proxima_aplicacao || !prevencao.pets || !prevencao.pets.user_id) {
                console.warn(`⚠️ Prevenção ID ${prevencao.id} incompleta. Pulando...`);
                continue;
            }

            let dataPrevencao: Date;
            try {
                dataPrevencao = converterParaData(String(prevencao.proxima_aplicacao));
            } catch (error) {
                console.error(`❌ Erro ao converter data da vacinação ID ${prevencao.id}:`, error);
                continue;
            }

            console.log(`📅 Prevenção ID ${prevencao.id} → Data: ${dataPrevencao.toLocaleDateString()} | Agora: ${agora.toLocaleDateString()}`);

            const diferencaEmMs = dataPrevencao.getTime() - agora.getTime();
            const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24); // Converte para dias

            let lembreteSelecionado = null;

            if (diferencaEmDias >= 4.9 && diferencaEmDias <= 5.1) { // 5 dias antes
                lembreteSelecionado = LEMBRETES.find(l => l.tipo === "5dias");
            } else if (diferencaEmDias >= 0.9 && diferencaEmDias <= 1.1) { // 1 dia antes
                lembreteSelecionado = LEMBRETES.find(l => l.tipo === "1dia");
            }

            if (!lembreteSelecionado) {
                console.log(`🕒 Nenhuma notificação precisa ser enviada para ID ${prevencao.id}`);
                continue;
            }

            console.log(`📲 Preparando envio da notificação "${lembreteSelecionado.tipo}" para ID ${prevencao.id}`);

            const tokenUsuario = await tokenService.getTokenByUserId(prevencao.pets.user_id);
            if (!tokenUsuario || !tokenUsuario.token) {
                console.warn(`⚠️ Usuário ID ${prevencao.pets.user_id} não tem token registrado. Pulando...`);
                continue;
            }

            try {
                const response = await axios.post("https://petland.vet.br/api/sendNotification", {
                    token: tokenUsuario.token,
                    title: "Lembrete de Prevenção",
                    body: lembreteSelecionado.mensagem
                });

                if (response.status === 200) {
                    console.log(`✅ Notificação "${lembreteSelecionado.tipo}" enviada para ID ${prevencao.id}.`);
                    await prevencoesService.registrarNotificacao(prevencao.id, lembreteSelecionado.tipo);
                } else {
                    console.warn(`⚠️ Erro ao enviar notificação "${lembreteSelecionado.tipo}":`, response.data);
                }
            } catch (error) {
                console.error("❌ Erro ao chamar API de notificação:", error);
            }
        }
    } catch (error) {
        console.error("❌ Erro ao processar lembretes de prevenção:", error);
    }
});
