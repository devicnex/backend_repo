import prismaClient from "../../../prisma";
import { hash } from 'bcryptjs';

interface ClinicaRequest {
    responsavel: string;
    razaoSocial: string;
    email: string;
    telefone: string;
    cnjp: string;
    cep: string;
    endereco: string;
    numero: string;
    uf: string;
    cidade: string;
    password: string;
    complemento?: string;
}

class CadastroClinicaService {
    async execute({
        responsavel,
        password,
        razaoSocial,
        email,
        telefone,
        cnjp,
        cep,
        endereco,
        numero,
        uf,
        cidade,
        complemento = '',
    }: ClinicaRequest) {
        if (!email) {
            throw new Error('Email Incorreto!')
        }

        const clinicaAlreadyExists = await prismaClient.clinica.findFirst({
            where: {
                email: email,
                cnjp: cnjp,
            }
        });

        if (clinicaAlreadyExists){
            throw new Error('Email ou Cnjp já cadastrado!');
        }

        const passwordHash = await hash(password, 8);

        try{
            const clinica = await prismaClient.clinica.create({
                data:{
                    responsavel,
                    password: passwordHash,
                    razaoSocial,
                    email,
                    telefone,
                    cnjp,
                    cep,
                    endereco,
                    numero,
                    uf,
                    cidade,
                    complemento,
                    status: 1
                },
                select: {
                    id: true,
                    razaoSocial: true,
                    responsavel: true,
                    email: true,
                    telefone: true,
                    cnjp: true,
                    cep: true,
                    endereco: true,
                    numero: true,
                    uf: true,
                    cidade: true,
                    status: true,
                },
            });
            return clinica;
        } catch (err) {
            console.log('erro ao criar clinica' + err)
        }
    }
}

export { CadastroClinicaService };