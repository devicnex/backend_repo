import prisma from "../../prisma";


class DeletePetService {
    async execute(id: string) {
        const pet = await prisma.pet.delete({
            where: {
                id,
            },
        })
        return pet;
    }
}


export {DeletePetService}