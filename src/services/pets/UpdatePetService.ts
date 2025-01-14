import prismaClient from "../../prisma"

interface PetUpdade {
    id: string;
    name: string;
    apelido: string;
    chip: string;
    temperamento: string;
    tamanho: string;
    detalhes: string;
    img_perfil: string;
    idade: string;
    meses: string;
    raca: string;
    sexo: string;
}

class UpdatePetService {
    async execute({id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil}: PetUpdade){
        try{
            const EditPet = prismaClient.pet.findFirst({
                where: {
                    id: id
                } 
            })
            console.log(id + "Aqui está o ID do seu PETOZO!")
            if(!EditPet){
                throw Error("Pet não encontrado!!")
            } else {
                const updatePet =  await prismaClient.pet.update({
                    where: {
                        id: id
                    }, data: {
                        name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil
                    }
                })
                return updatePet;
            }
        } catch (err) {
            console.error("Erro ao atualizar Pet!" + err);
        }
    }

}

export { UpdatePetService }