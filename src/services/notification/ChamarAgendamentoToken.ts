import prismaClient from "../../prisma";

export class TokenAgendamentoService {
    async execute(tipoNotificacao: string) {
        try {
            const agendamentos = await prismaClient.agendamentos.findMany({
                where: {
                    status: 1,
                    NOT: {
                        notificacoes_enviadas: { contains: tipoNotificacao } // Apenas se NÃO tiver essa notificação
                    }
                },
                include: {
                    pets: true
                }
            });

            return agendamentos;
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

            // 🔥 Adiciona a nova notificação à string existente
            const novasNotificacoes = agendamento.notificacoes_enviadas
                ? `${agendamento.notificacoes_enviadas},${tipoNotificacao}`
                : tipoNotificacao;

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
