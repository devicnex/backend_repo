import prismaClient from "../../../prisma";

class DeleteHorarioService {
    async execute(){
        const horario = await prismaClient.horarios.deleteMany({
            where:{
                status: 0,  // fixo
            }
        })
        return horario;
    }
}

export { DeleteHorarioService }