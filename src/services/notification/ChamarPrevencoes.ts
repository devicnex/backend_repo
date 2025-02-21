import prismaClient from "../../prisma";

export class PrevencoesService {
    async buscarTodasPrevencoes() {
        try {
            return await prismaClient.vacina.findMany({
                include: {
                    pets: true,
                }
            });
        } catch (error) {
            console.log("❌ Erro ao buscar prevenções", error);
            throw error;
        }
    }

    async registrarNotificacao(id: string, tipoNotificacao: string) {
        try {
            const prevencao = await prismaClient.vacina.findUnique({
                where: { id: id },
                select: { notificacoes_enviadas: true }
            });

            if (!prevencao) {
                console.error(`❌ Prevenção ID ${id} não encontrada.`);
                return;
            }

            const notificacoes = prevencao.notificacoes_enviadas ? prevencao.notificacoes_enviadas.split(",") : [];

            if (notificacoes.includes(tipoNotificacao)) {
                console.warn(`⚠️ Notificação "${tipoNotificacao}" já foi enviada para prevenção ID ${id}. Pulando...`);
                return;
            }

            notificacoes.push(tipoNotificacao);
            const novasNotificacoes = notificacoes.join(",");

            await prismaClient.vacina.update({
                where: { id: id },
                data: { notificacoes_enviadas: novasNotificacoes }
            });

            console.log(`✅ Prevenção ID ${id} marcada como notificada (${tipoNotificacao}).`);
        } catch (error) {
            console.error(`❌ Erro ao atualizar notificação para prevenção ID ${id}:`, error);
        }
    }
}
