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
                where: { id },
                select: { notificacoes_enviadas: true }
            });

            if (!prevencao) {
                console.error(`❌ Prevenção ID ${id} não encontrada.`);
                return;
            }

            const notificacoes = prevencao.notificacoes_enviadas
                ? prevencao.notificacoes_enviadas.split(",")
                : [];

            if (notificacoes.includes(tipoNotificacao)) {
                console.warn(`⚠️ Notificação "${tipoNotificacao}" já foi enviada para prevenção ID ${id}.`);
                return;
            }

            notificacoes.push(tipoNotificacao);

            await prismaClient.vacina.update({
                where: { id },
                data: { notificacoes_enviadas: notificacoes.join(",") }
            });

            console.log(`✅ Prevenção ID ${id} marcada como notificada (${tipoNotificacao}).`);
        } catch (error) {
            console.error(`❌ Erro ao atualizar notificação para prevenção ID ${id}:`, error);
        }
    }

    // ✅ Método novo para verificar se já enviou notificação
    async verificarNotificacaoEnviada(id: string, tipoNotificacao: string): Promise<boolean> {
        try {
            const prevencao = await prismaClient.vacina.findUnique({
                where: { id },
                select: { notificacoes_enviadas: true }
            });

            if (!prevencao || !prevencao.notificacoes_enviadas) {
                return false;
            }

            const notificacoes = prevencao.notificacoes_enviadas.split(",");
            return notificacoes.includes(tipoNotificacao);
        } catch (error) {
            console.error(`❌ Erro ao verificar notificação para prevenção ID ${id}:`, error);
            return false;
        }
    }
}
