import prismaClient from "../../prisma";

class DetailPublicacoesService {
    async execute(){
        const posts = await prismaClient.publicacoes.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        return posts;
    }
}

export { DetailPublicacoesService }