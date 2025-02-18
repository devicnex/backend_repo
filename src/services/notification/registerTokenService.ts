import prismaClient from "../../prisma";

interface TokenRequest {
    user_id: string;
    token: string;
}

export class RegisterTokenService {
    async execute({ user_id, token }: TokenRequest) {
        try {
            const registerToken = await prismaClient.expoToken.upsert({
                where: { user_id }, // Busca pelo user_id
                update: { token },  // Se existir, apenas atualiza
                create: { user_id, token } // Se não existir, cria um novo
            });
            
            return registerToken;
        } catch (error) {
            console.error("Erro ao salvar token:", error);
            throw new Error("Erro ao registrar token.");
        }
    }
}
