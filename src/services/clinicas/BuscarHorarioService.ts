import prismaClient from "../../prisma";

class BuscarHorarioService {
    async execute(tipo: number, sub_categoria: string | null) {
        const whereClause: any = { tipo };

        if (sub_categoria) {
            whereClause.sub_categoria = sub_categoria;
        }

        const horario = await prismaClient.horarios.findMany({
            where: whereClause
        });

        return horario;
    }
}

export { BuscarHorarioService };
