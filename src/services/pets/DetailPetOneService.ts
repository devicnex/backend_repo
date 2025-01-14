import prismaClient from "../../prisma";

class DetailPetOneService {
    async execute(id_pet: string) {
        // console.log(id_pet + 'id passou pelo service');
        
        const pet = prismaClient.pet.findUnique({
            where: {
                id: id_pet
            }
        })
        return pet;

    }
}

export {DetailPetOneService}