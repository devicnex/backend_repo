import prisma from "../../prisma"

class DeleteExamService {

    async execute(id : string){

        const exame = await prisma.exame.deleteMany({
            where: {
                id: id,
            }
        });
        return exame
    }
}

export {DeleteExamService}