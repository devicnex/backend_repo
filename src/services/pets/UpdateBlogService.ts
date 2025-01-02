import prismaClient from "../../prisma";

interface Blog {
    id: string;
    conteudo: string;
}

class UpdateBlogService {
    async execute({ id, conteudo }: Blog): Promise<Blog> {
        if (!id || !conteudo) {
            throw new Error("Campos 'id' e 'conteudo' são obrigatórios");
        }

        try {
            const blogExistente = await prismaClient.blog.findUnique({
                where: { id },
            });

            if (!blogExistente) {
                throw new Error("Blog não encontrado");
            }

            const updateBlog = await prismaClient.blog.update({
                where: { id },
                data: { conteudo },
            });

            return updateBlog;
        } catch (err) {
            console.error("Erro ao atualizar conteúdo:", err);
            throw err;
        }
    }
}

export { UpdateBlogService };
