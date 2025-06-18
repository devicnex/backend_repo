import prismaClient from "../../prisma";

class BuscarServicoService {
    async handle(clinica_id: string){
        const detail = await prismaClient.servicos.findMany({
            where:{
                clinica_id: clinica_id
            },
            orderBy:{
                seq_id: 'desc'
            }
        })
        return detail
    }
}

export { BuscarServicoService }