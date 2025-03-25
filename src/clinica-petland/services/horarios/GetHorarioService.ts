import prismaClient from "../../../prisma";

class GetHorariosService {

    async execute(id_clinica: string) {
        const horario = await prismaClient.horarios.findFirst({
            where: { id_clinica }
        });

        return horario
    }
}

export { GetHorariosService }