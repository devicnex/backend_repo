import cron from "node-cron";
import { TokenAgendamentoService } from "../services/notification/ChamarAgendamentoToken";
import { BuscarTokenService } from "../services/notification/buscaTokenService";
import axios from "axios";

// ✅ Corrigida a conversão para aceitar "dd/mm/aaaa"
const converterParaData = (dataString: string, horario: string): Date => {
    if (!dataString || !horario) {
        throw new Error("Data ou horário inválido!");
    }

    let dia, mes, ano;

    if (dataString.includes("/")) {
        // Formato "dd/mm/aaaa"
        [dia, mes, ano] = dataString.split("/").map(Number);
    } else if (dataString.includes("-")) {
        // Formato "dd-mm-aaaa"
        [dia, mes, ano] = dataString.split("-").map(Number);
    } else {
        throw new Error(`Formato de data inválido: ${dataString}`);
    }

    const [horas, minutos] = horario.split(":").map(Number);

    const dataConvertida = new Date(ano, mes - 1, dia, horas, minutos, 0);

    if (isNaN(dataConvertida.getTime())) {
        throw new Error(`❌ Erro ao converter data: ${dataString} ${horario}`);
    }

    console.log(`📆 Data convertida com sucesso: ${dataConvertida}`);
    return dataConvertida;
};

// 🔹 Tipos de lembretes e regras
const LEMBRETES = [
    { tipo: "5dias", tempoAntes: 5 * 24 * 60 * 60 * 1000, mensagem: "Seu exame está marcado para daqui a 5 dias!" },
    { tipo: "1dia", tempoAntes: 24 * 60 * 60 * 1000, mensagem: "Seu exame é amanhã. Chegue com 15 minutos de antecedência!" },
    { tipo: "60min", tempoAntes: 60 * 60 * 1000, mensagem: "Seu exame começa em 1 hora. Não se atrase!" }
];

export const lembreteCron = cron.schedule("* * * * *", async () => {
    try {
        console.log("🔄 Executando cron para buscar agendamentos...");

        const tokenService = new BuscarTokenService();
        const agendamentoService = new TokenAgendamentoService();
        const agora = new Date();

        // Buscar todos os agendamentos ativos
        const agendamentos = await agendamentoService.buscarTodos();

        if (!Array.isArray(agendamentos) || agendamentos.length === 0) {
            console.log("⚠️ Nenhum agendamento encontrado.");
            return;
        }

        console.log(`✅ ${agendamentos.length} agendamento(s) encontrado(s).`);

        for (const agendamento of agendamentos) {
            if (!agendamento.data_agendamento || !agendamento.horario_agendamento || !agendamento.pets?.user_id) {
                console.warn(`⚠️ Agendamento ID ${agendamento.id} incompleto. Pulando...`);
                continue;
            }

            let dataAgendamento: Date;
            try {
                dataAgendamento = converterParaData(
                    String(agendamento.data_agendamento),
                    String(agendamento.horario_agendamento)
                );
            } catch (error) {
                console.error(`❌ Erro ao converter data do agendamento ID ${agendamento.id}:`, error);
                continue;
            }

            // 🔹 Log para depuração da conversão de data
            console.log(`📅 Agendamento ID ${agendamento.id} → Exame: ${dataAgendamento} | Agora: ${agora}`);

            const diferencaEmMs = dataAgendamento.getTime() - agora.getTime();
            const diferencaEmMinutos = diferencaEmMs / (1000 * 60); // Converte para minutos

            let lembreteSelecionado = null;

            if (diferencaEmMinutos >= 299 && diferencaEmMinutos <= 301) { // 5 dias (~300 min de margem)
                lembreteSelecionado = LEMBRETES.find(l => l.tipo === "5dias");
            } else if (diferencaEmMinutos >= 1439 && diferencaEmMinutos <= 1441) { // 1 dia (~1440 min)
                lembreteSelecionado = LEMBRETES.find(l => l.tipo === "1dia");
            } else if (diferencaEmMinutos >= 59 && diferencaEmMinutos <= 61) { // 60 min antes (~60 min)
                lembreteSelecionado = LEMBRETES.find(l => l.tipo === "60min");
            }

            if (!lembreteSelecionado) {
                console.log(`🕒 Nenhuma notificação precisa ser enviada para ID ${agendamento.id}`);
                continue;
            }

            console.log(`📲 Preparando envio da notificação "${lembreteSelecionado.tipo}" para ID ${agendamento.id}`);

            const tokenUsuario = await tokenService.getTokenByUserId(agendamento.pets.user_id);
            if (!tokenUsuario || !tokenUsuario.token) {
                console.warn(`⚠️ Usuário ID ${agendamento.pets.user_id} não tem token registrado. Pulando...`);
                continue;
            }

            try {
                const response = await axios.post("https://petland.vet.br/api/sendNotification", {
                    token: tokenUsuario.token,
                    title: "Lembrete de Consulta",
                    body: lembreteSelecionado.mensagem
                });

                if (response.status === 200) {
                    console.log(`✅ Notificação "${lembreteSelecionado.tipo}" enviada para ID ${agendamento.id}.`);
                    await agendamentoService.marcarNotificacaoEnviada(agendamento.id, lembreteSelecionado.tipo);
                } else {
                    console.warn(`⚠️ Erro ao enviar notificação "${lembreteSelecionado.tipo}":`, response.data);
                }
            } catch (error) {
                console.error("❌ Erro ao chamar API de notificação:", error);
            }
        }
    } catch (error) {
        console.error("❌ Erro ao processar lembretes:", error);
    }
});
