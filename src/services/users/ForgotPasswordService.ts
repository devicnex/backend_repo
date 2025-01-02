import prismaClient from "../../prisma";

interface ForgotRequest {
    email: string;
}

class ForgotPasswordService {
    async execute({ email }: ForgotRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            },select: {
                id: true
            }
        });
        if (!user) {
            throw new Error('E-mail não registrado.');
        }
        console.log(user)
        return user;
}
}

export {ForgotPasswordService}