import prismaClient from "../../prisma";

class DetailBlogService {
    async execute() {
        // console.log("Iniciando a busca por todos os posts");

        const posts = await prismaClient.blog.findMany({
            orderBy: {
                created_at: 'desc'
            }
        }); // Usando findMany para buscar todos os posts

        if (!posts || posts.length === 0) {
        // console.log("Nenhum post encontrado");
        } else {
        // console.log("Quantidade de posts encontrados:", posts.length);
        }

        return posts;
    }
}

export { DetailBlogService };
