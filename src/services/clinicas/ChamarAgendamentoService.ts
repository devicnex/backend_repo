import prismaClient from "../../prisma";

class ChamarAgendamentoService {
    async execute(user_id: string) {
        const agendamentos = await prismaClient.agendamentos.findMany({
            where: {
                pets: {
                    user_id: user_id
                }
            },
            include: {
                pets: true,
                horarios: true,
                clinicas: true,
                servicos: true,
            },
        });
        return agendamentos;
    }
}

export { ChamarAgendamentoService }