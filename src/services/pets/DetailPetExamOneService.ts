import prismaClient from "../../prisma";

export class DetalPetExamOneService {
    async execute(id_exame: string) {
        console.log(id_exame);
        try{
            const SearchExam = await prismaClient.exame.findFirst({
                where: {
                    id: id_exame
                }
            })
            return SearchExam
        } catch (error){
            console.error("Erro ao achar ID" + error)
        }
    }
}