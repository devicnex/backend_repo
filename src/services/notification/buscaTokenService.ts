import prismaClient from "../../prisma";

class BuscarTokenService {
    async getTokenByUserId(user_id: string) {
        console.log(`🔍 Buscando token para user_id: ${user_id}`);

        const token = await prismaClient.expoToken.findUnique({
            where: { user_id }
        });

        if (token) {
            console.log(`✅ Token encontrado: ${token.token}`);
        } else {
            console.warn(`⚠️ Nenhum token encontrado para user_id ${user_id}`);
        }

        return token;
    }
}

export { BuscarTokenService };
