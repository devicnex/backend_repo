import prisma from "../../prisma";

class DeleteBlogService {
    async execute(id: string) {
        const blog = await prisma.blog.delete({
            where: {
                id,
            },
        })
        return blog;
    }
}


export {DeleteBlogService}