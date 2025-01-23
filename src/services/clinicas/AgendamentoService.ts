import prismaClient from "../../prisma";

type Agendamento = {
    pet_id: string
    id_horario: string
    id_empresa: string
    id_servico: string
}


class AgendamentoService {
    async execute({pet_id, id_horario, id_empresa, id_servico}: Agendamento){
        const agendamento = await prismaClient.agendamentos.create({
            data:{
                pet_id: pet_id,
                id_horario: id_horario,
                id_empresa: id_empresa,
                id_servico: id_servico,
            },
            select: {
                pet_id: true,
                id_horario: true,
                id_empresa: true,
                id_servico: true
            }
        });
        return agendamento;
    }
}

export { AgendamentoService }