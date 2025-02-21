import prismaClient from "../../prisma";

interface VaccineUpdate{
    id: string,
    data_vacinacao: string,
    proxima_aplicacao: string,
    vacina: string,
    clinica: string,
    intervalo: string, 
    observacao: string,
}

class UpdateVaccineService {
    async execute({id, data_vacinacao, vacina, clinica, intervalo, observacao, proxima_aplicacao}: VaccineUpdate) {
        try{
            const vaccineAlreadyExists =  await prismaClient.vacina.findFirst({
                where: {
                    id
                }
            })
            if(!vaccineAlreadyExists){
                throw Error("Vacina não encontrada!");
            } else {
                const updateVaccine = await prismaClient.vacina.update({
                    where: {
                        id: id
                    }, data: {
                        data_vacinacao, vacina, clinica, intervalo, observacao, proxima_aplicacao
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