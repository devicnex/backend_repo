import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        console.log(email + password)
        console.log('DATABASE_URL:', process.env.DATABASE_URL);

        try {
            // Verifica se o email existe
            const user = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });

            if (!user) {
                console.error('User not found');
                throw new Error('Usuário ou senha incorreto');
            }

            // Verifica se a senha está correta
            const passwordMatch = await compare(password, user.password);

            if (!passwordMatch) {
                console.error('Incorrect password');
                throw new Error('Usuário ou senha incorreto');
            }

            // Gera o token JWT
            const token = sign(
                {
                    name: user.name,
                    email: user.email
                },
                process.env.JWT_SECRET,
                {
                    subject: user.id,
                    expiresIn: '30d'
                }
            );

            // Normaliza a data para o formato MySQL
            const data = new Date();
            const dataFormatadaISO = data.toISOString(); // Gera a string no formato ISO-8601 completo
            
            console.log('Data formatada para Prisma:', dataFormatadaISO);
            
            try {
                const updateAtividade = await prismaClient.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        updated_at: dataFormatadaISO // Passa a string ISO-8601 completa
                    }
                });
                // console.log('Update realizado com sucesso:', updateAtividade);
            } catch (err) {
                console.error('Erro ao atualizar a data do usuário:', err);
            }
            

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                token: token,
                update_data: user.updated_at // Retorna a data atualizada
            };
        } catch (error) {
            console.error('Authentication error:', error);
            throw error;
        }
    }
}

export { AuthUserService };
