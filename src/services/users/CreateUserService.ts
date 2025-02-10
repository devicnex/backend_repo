import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
    bairro?: string; 
    cep?: string;
    cidade?: string;
    complemento?: string; 
    cpfcnpj?: string; 
    endereco?: string;
    estado?: string;
    numero?: string;
    telefone?: string;
    status?: string;
}

class CreateUserService {
    async execute({ 
        name, 
        email, 
        password, 
        bairro = '', 
        cep = '', 
        cidade = '', 
        complemento = '', 
        cpfcnpj = '', 
        endereco = '', 
        estado = '', 
        numero = '', 
        telefone = '', 
        status = '',

    }: UserRequest) {
        if (!email) {
            throw new Error('Email Incorreto');
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw new Error('Email já existe Cadastrado no banco de Dados');
        }

        const passwordHash = await hash(password, 8);

        try {
            const user = await prismaClient.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash,
                    bairro,
                    cep,
                    cidade,
                    complemento,
                    cpfcnpj,
                    endereco,
                    estado,
                    numero,
                    telefone,
                    status,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            });
            return user;

        } catch (err) {
            console.log('erro ao criar' + err);
        }
    }
}

export { CreateUserService };
