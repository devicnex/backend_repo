import prismaClient from "../../../prisma";

class InfosVeterinarioService {
    async handle(clinica_id: string) {
        const veterinarios = await prismaClient.veterinarios.findMany({
            where:{
                clinica_id: clinica_id
            },
            orderBy:{
                seq_id: 'desc'
            }
        })
        return veterinarios;
    }
}

export { InfosVeterinarioService};