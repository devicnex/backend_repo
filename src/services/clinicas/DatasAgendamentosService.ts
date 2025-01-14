import prismaClient from "../../prisma";

interface DataDisponivel {
    clinica : string
    data_servico : string
    horario_servico  : string
}

class DatasAgendamentosService {
    async execute({ clinica, data_servico, horario_servico}: DataDisponivel){

        const datasAgendamento = await prismaClient.dataDisponivel.create({
            data: {
                clinica: clinica,
                data_servico: data_servico,
                horario_servico: horario_servico,
            },
            select: {
                clinica: true,
                data_servico: true,
                horario_servico: true,
            }
        });
        return datasAgendamento
    }

}

export { DatasAgendamentosService }