import prismaClient from "../../../prisma";

class BuscarHorarioService {
    async execute(servico: string) {

        const horario = await prismaClient.horarios.findMany({
            where: {
                status: 1,
                servico: {
                    servico: {
                        contains: servico,
                    }
                }
            },
            include: {
                clinicas: true, 
                servico: true,
                veterinario: true,
            }
        });

        return horario;
    }

}



export { BuscarHorarioService };