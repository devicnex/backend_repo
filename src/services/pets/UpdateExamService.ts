import prismaClient from "../../prisma";

interface ExamUpdate {
    id: string,
    data_exame: string,
    exame: string,
    clinica: string, 
    observacao: string
}

class UpdateExamService {
    async execute ({id , data_exame, exame, clinica, observacao}: ExamUpdate) {
        try{
            const examAlreadyExists = prismaClient.exame.findFirst({
                where: {
                    id
                }
            }) 
            if(!examAlreadyExists){
                throw Error("Exame não encontrado")
            } else {
                const updateExam =  prismaClient.exame.update({
                    where: {
                        id: id
                    }, data: {
                        data_exame, exame, clinica, observacao
                    }
                })
                return updateExam
            }
        } catch (err) {
            console.error("Erro ao atualizar exame")
        }
    }
}

export { UpdateExamService }