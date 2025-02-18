import cron from "node-cron";
import { TokenAgendamentoService } from "../services/notification/ChamarAgendamentoToken";
import { BuscarTokenService } from "../services/notification/buscaTokenService";
import axios from "axios";

//  Função para converter data `dd/mm/aaaa` para `Date`
const converterParaData = (dataString: string, horario: string): Date => {
    if (!dataString || !horario) {
        throw new Error("Data ou horário inválido!");
    }

    const [dia, mes, ano] = dataString.split("/").map(Number);
    const [horas, minutos] = horario.split(":").map(Number);

    return new Date(ano, mes - 1, dia, horas, minutos, 0);
};

//  Tipos de lembretes e suas regras
const LEMBRETES = [
    { tipo: "5dias", tempoAntes: 5 * 24 * 60 * 60 * 1000, mensagem: "Seu exame está marcado para daqui a 5 dias!" },
    { tipo: "1dia", tempoAntes: 24 * 60 * 60 * 1000, mensagem: "Seu exame é amanhã! Prepare-se." },
    { tipo: "60min", tempoAntes: 60 * 60 * 1000, mensagem: "Seu exame está prestes a começar. Não se atrase!" }
];

export const lembreteCron = cron.schedule("* * * * *", async () => {
    try {
        console.log("Executando cron para buscar agendamentos...");

        const tokenService = new BuscarTokenService();
        const agendamentoService = new TokenAgendamentoService();
        const agora = new Date();

        // Itera sobre cada tipo de lembrete
        for (const { tipo, tempoAntes, mensagem } of LEMBRETES) {
            // console.log(`Buscando agendamentos para o lembrete "${tipo}"`);

            //  Buscar agendamentos para esse tipo de notificação
            const agendamentos = await agendamentoService.execute(tipo);

            if (!Array.isArray(agendamentos) || agendamentos.length === 0) {
                // console.log(`Nenhum agendamento precisa do lembrete "${tipo}".`);
                continue;
            }

            // console.log(` ${agendamentos.length} agendamento(s) encontrados para "${tipo}".`);

            for (const agendamento of agendamentos) {
                // console.log(` Processando agendamento ID: ${agendamento.id}`);

                if (!agendamento.data_agendamento || !agendamento.horario_agendamento || !agendamento.pets?.user_id) {
                    console.warn(` Agendamento ID ${agendamento.id} incompleto. Pulando...`);
                    continue;
                }

                //  Convertendo a data corretamente
                let dataAgendamento: Date;
                try {
                    dataAgendamento = converterParaData(
                        String(agendamento.data_agendamento),
                        String(agendamento.horario_agendamento)
                    );
                } catch (error) {
                    console.error(`Erro ao converter data do agendamento ID ${agendamento.id}:`, error);
                    continue;
                }

                // console.log(`Data e Hora do Agendamento ajustada: ${dataAgendamento}`);

                //  Criar a data de envio da notificação
                const tempoNotificacao = new Date(dataAgendamento.getTime() - tempoAntes);
                // console.log(`Notificação "${tipo}" será enviada em: ${tempoNotificacao}`);

                //  Comparação pelo timestamp (evita problemas de formatação)
                if (agora.getTime() >= tempoNotificacao.getTime() && agora.getTime() < dataAgendamento.getTime()) {
                    // console.log(`[NOTIFICAÇÃO] Enviando "${tipo}" para agendamento ID ${agendamento.id}`);

                    const tokenUsuario = await tokenService.getTokenByUserId(agendamento.pets.user_id);
                    if (!tokenUsuario || !tokenUsuario.token) {
                        console.warn(`Usuário ID ${agendamento.pets.user_id} não tem token registrado. Pulando...`);
                        continue;
                    }

                    // console.log(` Token do Usuário encontrado: ${tokenUsuario.token}`);

                    try {
                        const response = await axios.post("https://petland.vet.br/api/sendNotification", {
                            token: tokenUsuario.token,
                            title: "Lembrete de Consulta",
                            body: mensagem
                        });

                        if (response.status === 200) {
                            // console.log(` Notificação "${tipo}" enviada com sucesso para ${tokenUsuario.token}`);

                            // 🔥 Marcar notificação como enviada
                            await agendamentoService.marcarNotificacaoEnviada(agendamento.id, tipo);
                        } else {
                            console.warn(`Erro ao enviar notificação "${tipo}":`, response.data);
                        }
                    } catch (error) {
                        console.error(` Erro ao chamar API de notificação:`, error);
                    }
                } else {
                    // console.log(`Ainda não é hora de enviar "${tipo}" para ID ${agendamento.id}`);
                }
            }
        }
    } catch (error) {
        console.error("Erro ao processar lembretes:", error);
    }
});
