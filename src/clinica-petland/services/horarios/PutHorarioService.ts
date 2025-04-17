import prismaClient from "../../../prisma";

interface HorarioUpdate {
    id: string,
    data_servico: string,
    horario_servico: string,
    id_veterinario: string,
}

class PutHorarioService {
    async execute({id, data_servico, horario_servico, id_veterinario}: HorarioUpdate) {
        try{
            const editHora = prismaClient.horarios.findFirst({
                where: {
                    id: id
                }
            })
            if(!editHora) {
                throw Error('Horario não encontrado!')
            } else {
                const updateHorario = prismaClient.horarios.update({
                    where: {
                        id: id
                    }, data: {
                        data_servico, horario_servico, id_veterinario
                    }
                })
                return updateHorario
            }
        } catch (err) {
            console.log("Erro ao atualizar dados: " + err)
        }
    }
}

export { PutHorarioService }