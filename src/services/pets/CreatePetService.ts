import prismaClient from "../../prisma";

interface PetRequest {
    name: string,                   
    apelido: string,                   
    especie: string,                   
    idade: string,                   
    meses: string,                   
    raca: string,                   
    chip: string,                   
    sexo: string,                   
    temperamento: string,                   
    tamanho: string,                   
    detalhes?: string,                   
    img_perfil: string,                   
    user_id: string,                   
}

class CreatePetService {
    async execute({name, apelido, especie, idade, meses, raca, chip, sexo, temperamento, tamanho, detalhes, img_perfil, user_id}: PetRequest) {
        
        if (!name || !apelido || !especie || !idade || !meses || !raca || !chip || !sexo || !temperamento || !tamanho || !img_perfil || !user_id) {
            throw new Error("Algum campo está vazio, verifique...");
        }

        const pet = await prismaClient.pet.create({
            data: {
                name,
                apelido,
                especie,
                idade,
                meses, 
                raca,
                chip,
                sexo,
                temperamento,
                tamanho,
                detalhes: detalhes || null,
                img_perfil,
                user_id
            },
            select: {
                name: true,
            }
        });
        return pet;
    }   
}

export { CreatePetService };
