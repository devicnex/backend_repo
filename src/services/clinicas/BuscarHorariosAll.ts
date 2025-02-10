import prismaClient from "../../prisma";


export class BuscarHorarioAllService {
    async execute() {

        const response = await prismaClient.horarios.findMany();

        if(!response) {
            return {msg: "Nenhum horario cadastrado"}
        }

        return response;

    }
}