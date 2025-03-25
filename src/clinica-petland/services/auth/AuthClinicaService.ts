import prismaClient from "../../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthClinicaService {
    async execute({email, password} : AuthRequest){
        
        try{
            const clinica = await prismaClient.clinica.findFirst({
                where: {
                    email: email
                }
            });

            if (!clinica) {
                console.error('Clinica não encontrada');
                throw new Error('Email ou senha incorreto')
            }

            const passwordMatch = await compare(password, clinica.password);

            if (!passwordMatch){
                console.error("Senha incorreta!");
                throw new Error('Usuário ou senha incorreto!');
            }

            const token = sign(
                {
                    name: clinica.razaoSocial,
                    email: clinica.email
                },
                process.env.JWT_SECRET,
                {
                    subject: clinica.id,
                    expiresIn: '30d'
                }               
            );

            const data = new Date();
            const dataFormatadaISO = data.toISOString();

            console.log("Data para o prisma:" + dataFormatadaISO);

            try{
                const updateAtividade = await prismaClient.clinica.update({
                    where: {
                        id: clinica.id
                    },
                    data: {
                        updated_at: dataFormatadaISO
                    }
                });
            } catch (err) {
                console.error('Erro ao atualizar a data do usuário' + err);
            }

            return {
                id: clinica.id,
                name: clinica.razaoSocial,
                email: clinica.email,
                token: token,
                update_data: clinica.updated_at
            };
        } catch (err) {
            console.error("Erro na Authenticação:" + err);
            throw err;
        }
    }
}


export { AuthClinicaService };