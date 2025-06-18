import prismaClient from "../../prisma";

class BuscarTodosServicosService {

    async execute() {
        const servicos = await prismaClient.servicos.findMany({
            where: {
                status: 1
            },
            include: {
                clinica: {
                    select: {
                        razaoSocial: true
                    }
                }
            },
            orderBy: {
                seq_id: 'desc'
            }
        });

        return servicos
    }
}

export { BuscarTodosServicosService }