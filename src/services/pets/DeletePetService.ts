import prisma from "../../prisma";

class DeletePetService {
    async execute(id: string) {
        try {
            await prisma.$transaction(async (prisma) => {
                
                await prisma.vacina.deleteMany({ where: { pet_id: id } });
                await prisma.exame.deleteMany({ where: { pet_id: id } });
                await prisma.publicacoes.deleteMany({ where: { pet_id: id } });
                await prisma.agendamentos.deleteMany({ where: { pet_id: id } });

                await prisma.pet.delete({
                    where: { id },
                });
            });

            return { message: "Pet excluído com sucesso!" };
        } catch (error) {
            throw new Error("Erro ao excluir o pet: " + error.message);
        }
    }
}

export { DeletePetService };
