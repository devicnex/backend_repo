import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id:          true,
                name:        true,
                email:       true,
                cpfcnpj:     true,
                telefone:    true,
                cep:         true,
                endereco:    true,
                complemento: true,
                numero:      true,
                bairro:      true,
                cidade:      true,
                estado:      true,
                status:      true,
                img_usuario: true,
                updated_at: true
            }
        })
        return user;
    }
}


export { DetailUserService }