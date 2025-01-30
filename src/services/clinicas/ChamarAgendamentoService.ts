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
                pets: true, // Inclui os dados do pet relacionados
                horarios: true, // Inclui os dados do horário relacionado
                empresas: true, // Inclui os dados do serviço relacionado
                servicos: true,
            },
        });
        return agendamentos;
    }
}

export { ChamarAgendamentoService }