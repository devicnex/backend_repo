import bcrypt from 'bcryptjs';
import prismaClient from '../../prisma';

interface UserRequest {
    user_id: string;
    password: string;
}

class UpdateUserService {
    async execute({ user_id, password }: UserRequest) {
        try {
            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                }
            });

            if (!userAlreadyExists) {
                throw new Error("User not found!");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const userUpdate = await prismaClient.user.update({
                where: {
                    id: user_id
                },
                data: {
                    password: hashedPassword,
                },
                select: {
                    password: true,
                }
            });

            return userUpdate;

        } catch (err) {
            console.log(err);
            throw new Error("Error updating password!");
        }
    }
}

export { UpdateUserService };
