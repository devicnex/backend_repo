import prismaClent from "../../prisma"

export class ExpoTokenService {
    // Salvar ou atualizar token no banco
    static async saveToken(user_id: string, token: string) {
        try {
            // Verifica se o token já existe no banco
            const existingToken = await prismaClent.expoToken.findUnique({
                where: { token }
            });

            if (!existingToken) {
                await prismaClent.expoToken.upsert({
                    where: { user_id },
                    update: { token },
                    create: { user_id, token }
                });

                console.log("🔔 Token salvo com sucesso!");
            }
        } catch (error) {
            console.error("❌ Erro ao salvar token:", error);
        }
    }

    // Buscar todos os tokens
    static async getAllTokens() {
        return await prismaClent.expoToken.findMany();
    }
}
