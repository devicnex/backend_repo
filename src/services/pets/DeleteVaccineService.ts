import prisma from "../../prisma"

class DeleteVaccineService {
    async execute(id: string) {
        // console.log(id);

        const vacina = await prisma.vacina.deleteMany({
            where: {
                id: id,
            },
        });
        return vacina;
    }
}

export { DeleteVaccineService };
