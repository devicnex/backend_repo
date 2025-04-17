import prismaClient from "../../../prisma";


export class BuscarHorarioAllService {
    async execute() {

        const response = await prismaClient.horarios.findMany();

        if(!response) {
            return {msg: "Nenhum horario cadastrado"}
        }

        return response;

    }


    async BuscarAgendamentos() {
        const response = await prismaClient.horarios.findMany({
            include: {
                agendamentos: {
                    include: {
                        users: true,
                        pets: true,
                    }
                },
                veterinario: true,
            } ,
            orderBy: {
                seq_id: 'desc'
            }
        });

        if (!response) {
            throw Error("Dados Indisponivéis");
        }
        return response;


    }
}