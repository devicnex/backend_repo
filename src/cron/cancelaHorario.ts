import cron from "node-cron";
import prismaClient from "../prisma";

// Função auxiliar para verificar se está expirado
const estaExpirado = (data: string, hora: string): boolean => {
    const [dia, mes, ano] = data.split('/').map(Number);
    const [horas, minutos] = hora.split(':').map(Number);
    const dataHorario = new Date(ano, mes - 1, dia, horas, minutos, 0);
    return dataHorario.getTime() < new Date().getTime();
};

// Cron que roda a cada minuto atualizando status 1 para 3 quando expirado
export const cancelaHorarioCron = cron.schedule("* * * * *", async () => {
    try {
        console.log("🔄 Iniciando cron de cancelamento de horários expirados...");

        // Busque apenas horários ativos (status: 1)
        const horariosAtivos = await prismaClient.horarios.findMany({
            where: { status: 1 },
            select: {
                id: true,
                data_servico: true,
                horario_servico: true
            },
        });

        if (!horariosAtivos.length) {
            console.log("✅ Nenhum horário ativo encontrado para cancelamento.");
            return;
        }

        const expirados = horariosAtivos.filter(h => estaExpirado(h.data_servico, h.horario_servico));

        if (expirados.length === 0) {
            console.log("✅ Nenhum horário expirado para cancelar neste momento.");
            return;
        }

        // Atualização direta do status para 3 (cancelado)
        const result = await prismaClient.horarios.updateMany({
            where: {
                id: { in: expirados.map(h => h.id) }
            },
            data: { status: 3 }
        });

        console.log(`✅ ${result.count} horário(s) atualizado(s) para CANCELADO.`);

    } catch (error) {
        console.error("❌ Erro no cron de cancelamento de horários:", error);
    }
});
