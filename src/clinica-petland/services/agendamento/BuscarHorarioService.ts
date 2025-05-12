import prismaClient from "../../../prisma";

class BuscarHorarioService {
    async execute(tipo: number, sub_categoria: string | null) {
        const whereClause: any = { 
            tipo,
            status: 1
        };

        if (sub_categoria) {
            whereClause.sub_categoria = sub_categoria;
        }

        const horario = await prismaClient.horarios.findMany({
            where: whereClause,
            include: {
                clinicas: true,
                veterinario: true,
            }
        });

        return horario;
    }

}



export { BuscarHorarioService };


