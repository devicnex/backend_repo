import prismaClient from "../../prisma";

interface PubliRequest {
    pet_id: string;
    conteudo: string;
    img_blog: string
}


class BlogPetService {
    async execute({pet_id, conteudo, img_blog}: PubliRequest) {

        const blog = await prismaClient.publicacoes.create({
            data: {
                pet_id: pet_id,
                conteudo: conteudo,
                img_blog: img_blog,
            },
            select: {
                pet_id: true,
                conteudo: true,
                img_blog: true,
            }
        });
        return blog
    }
}

export { BlogPetService }