import prismaClient from "../../prisma"

interface ExamRequest {
    data_exame: string;
    exame: string;
    clinica: string;
    observacao: string;
    img_laudo: string;
    pet_id: string;
}

class RegisterExamService {
    async execute({ data_exame, exame, clinica, observacao, img_laudo, pet_id}: ExamRequest) {
    
    const exames =  await prismaClient.exame.create({
        data: {
            data_exame: data_exame,
            exame: exame,
            clinica: clinica,
            observacao: observacao,
            img_laudo: img_laudo,
            pet_id: pet_id,
        },
        select: {
            data_exame: true,
            exame: true,
            clinica: true,
            observacao: true,
            img_laudo: true,
            pet_id: true,
        }
    });
        return exames
    }
}

export { RegisterExamService }