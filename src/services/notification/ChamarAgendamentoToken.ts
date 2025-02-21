import prismaClient from "../../prisma";

export class TokenAgendamentoService {
    async buscarTodos() {
        try {
            return await prismaClient.agendamentos.findMany({
                where: {
                    status: 1
                },
                include: {
                    pets: true
                }
            });
        } catch (error) {
            console.error("❌ Erro ao buscar agendamentos:", error);
            throw error;
        }
    }

    async marcarNotificacaoEnviada(agendamentoId: string, tipoNotificacao: string) {
        try {
            const agendamento = await prismaClient.agendamentos.findUnique({
                where: { id: agendamentoId },
                select: { notificacoes_enviadas: true }
            });

            if (!agendamento) {
                console.error(`❌ Agendamento ${agendamentoId} não encontrado.`);
                return;
            }

            const notificacoes = agendamento.notificacoes_enviadas ? agendamento.notificacoes_enviadas.split(",") : [];

            if (notificacoes.includes(tipoNotificacao)) {
                console.warn(`⚠️ Notificação "${tipoNotificacao}" já foi enviada para o agendamento ${agendamentoId}. Pulando...`);
                return;
            }

            // 🔥 Adiciona a nova notificação à string existente
            notificacoes.push(tipoNotificacao);
            const novasNotificacoes = notificacoes.join(",");

            await prismaClient.agendamentos.update({
                where: { id: agendamentoId },
                data: { notificacoes_enviadas: novasNotificacoes }
            });

            console.log(`✅ Agendamento ${agendamentoId} marcado como notificado (${tipoNotificacao}).`);
        } catch (error) {
            console.error(`❌ Erro ao atualizar agendamento ${agendamentoId}:`, error);
        }
    }
}
