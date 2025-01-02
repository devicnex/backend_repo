import prismaClient from "../../prisma";


class DetailVaccinesService {
    async execute(pet_id: string) {
        console.log(pet_id)
        
        const detailVaccine = await prismaClient.vacina.findMany({
            where: {
                pet_id: pet_id
            }
        })
        
        return detailVaccine;
    }
}

export { DetailVaccinesService }