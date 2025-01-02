import prismaClient from "../../prisma";

class CuriosidadeService {
    async getOneByIndex(index) {
        const curiosidades = await prismaClient.curiosidade.findMany();
        if (curiosidades.length > 0) {
            const adjustedIndex = index % curiosidades.length;
            return curiosidades[adjustedIndex];
        }
        return null;
    }
}

export { CuriosidadeService };
