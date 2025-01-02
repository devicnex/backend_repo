import prismaClient from "../../prisma";


class DetailExamService {
    async execute(id_pet: string) {
        const detailpet = await prismaClient.exame.findMany({
            where: {
                pet_id: id_pet
            }
        })
        return detailpet;
    }
}

export { DetailExamService }