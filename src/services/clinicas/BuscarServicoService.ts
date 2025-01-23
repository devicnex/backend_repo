import prismaClient from "../../prisma";

class BuscarServicoService {
    async execute(){
        const detail = await prismaClient.servicos.findMany({
            select: {
                id: true,
                nome: true,
                tipo: true,
                status: true
            }
        })
        return detail
    }
}

export { BuscarServicoService }