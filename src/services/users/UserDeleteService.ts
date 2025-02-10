import prisma from "../../prisma";


class UserDeleteService {
    async execute(id: string) {
        try {
            await prisma.$transaction(async (prisma) => {
                // Primeiro, obter todos os pets do usuário
                const pets = await prisma.pet.findMany({
                    where: { user_id: id },
                    select: { id: true }
                });

                if (pets.length > 0) {
                    const petIds = pets.map(pet => pet.id);

                    // Excluir as dependências do pets
                    await prisma.vacina.deleteMany({ where: { pet_id: { in: petIds } } });
                    await prisma.exame.deleteMany({ where: { pet_id: { in: petIds } } });
                    await prisma.publicacoes.deleteMany({ where: { pet_id: { in: petIds } } });
                    await prisma.agendamentos.deleteMany({ where: { pet_id: { in: petIds } } });

                    //  excluir os pets do usuário
                    await prisma.pet.deleteMany({ where: { user_id: id } });
                }

                // Por fim, excluir o usuário
                await prisma.user.delete({
                    where: { id },
                });
            });

            return { message: "Usuário e seus dados excluídos com sucesso!" };
        } catch (error) {
            throw new Error("Erro ao excluir usuário: " + error.message);
        }
    }
}


export { UserDeleteService }









// async execute(id: string) {
//     const user = await prisma.user.delete({
//         where: {
//             id,
//         },
//     })
//     return user;
// }
// }