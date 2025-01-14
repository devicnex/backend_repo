import prismaClient from "../../prisma";

interface VaccineUpdate{
    id: string,
    data_vacinacao: string,
    vacina: string,
    clinica: string,
    intervalo: string, 
    observacao: string,
}

class UpdateVaccineService {
    async execute({id, data_vacinacao, vacina, clinica, intervalo, observacao}: VaccineUpdate) {
        try{
            const vaccineAlreadyExists = prismaClient.vacina.findFirst({
                where: {
                    id
                }
            })
            if(!vaccineAlreadyExists){
                throw Error("Vacina não encontrada!");
            } else {
                const updateVaccine = prismaClient.vacina.update({
                    where: {
                        id: id
                    }, data: {
                        data_vacinacao, vacina, clinica, intervalo, observacao
                    }
                })
                return updateVaccine;
            }
        } catch (err) {
            console.error("Erro ao atualizar vacina!" + err)
            return err
            
        }
    }
}

export { UpdateVaccineService }