import prismaClient from "../../prisma";

type Agendamento = {
    pet_id: string
    id_horario: string
    id_clinica: string
    id_servico: string
    data_agendamento: string
    horario_agendamento: string
    user_id: string
}


class AgendamentoService {
    async execute({pet_id, id_horario, id_clinica, id_servico, data_agendamento, horario_agendamento, user_id}: Agendamento){
        const agendamento = await prismaClient.agendamentos.create({
            data:{
                pet_id: pet_id,
                id_horario: id_horario,
                id_clinica: id_clinica,
                id_servico: id_servico,
                data_agendamento: data_agendamento,
                horario_agendamento: horario_agendamento,
                user_id: user_id,
            },
            select: {
                pet_id: true,
                id_horario: true,
                id_clinica: true,
                id_servico: true,
                data_agendamento: true,
                horario_agendamento: true,
                user_id: true
            }
        });
        return agendamento;
    }
}

export { AgendamentoService }