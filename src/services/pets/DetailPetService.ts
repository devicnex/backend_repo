import prismaClient from "../../prisma";

class DetailPetService {
    async execute(user_id: string) {
        const pet = await prismaClient.pet.findMany({
            where: {
                user_id: user_id
            }
        })
        return pet;
    }
}

export {DetailPetService}