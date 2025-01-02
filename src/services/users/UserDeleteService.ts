import prisma from "../../prisma";


class UserDeleteService {
    async execute(id: string) {
        const user = await prisma.user.delete({
            where: {
                id,
            },
        })
        return user;
    }
}


export { UserDeleteService }