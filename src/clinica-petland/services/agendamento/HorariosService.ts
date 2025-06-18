import prismaClient from "../../../prisma";

type Horarios = {
    datas: string[]
    horario_servico: string
    id_servico: string
    id_clinica: string
    id_veterinario: string
    status: number
}

class HorarioService {
    async execute({ datas, horario_servico, id_servico, id_clinica, id_veterinario, status }: Horarios) {

        const ultimo = await prismaClient.horarios.findFirst({
            orderBy: {
            seq_id: 'desc'
            },
            select: {
            seq_id: true
            }
        }); 

        let proximoSeqId = (ultimo?.seq_id || 0) + 1;

        const dadosParaCriar = datas.map((data) => {
            return {
                seq_id: proximoSeqId++,
                data_servico: data,
                horario_servico: horario_servico,
                id_servico: id_servico,
                id_clinica: id_clinica,
                id_veterinario: id_veterinario,
                status: status,
            }
        })

        await prismaClient.horarios.createMany({
            data: dadosParaCriar,
        })
        return { success: true, total: dadosParaCriar.length }
    }
}

export { HorarioService };
