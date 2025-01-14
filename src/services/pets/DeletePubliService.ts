import prisma from "../../prisma";

class DeletePubliService {
    async execute(id: string) {
        const publi = await prisma.publicacoes.delete({
            where: {
                id,
            },
        })
        return publi;
    }
}


export {DeletePubliService}