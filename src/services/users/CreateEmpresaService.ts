import prismaClient from "../../prisma";

type Empresa = {
    nome: string,
    cnpj: string
}

class CreateEmpresaService {
    async execute({nome, cnpj}: Empresa) {
        const empresa = await prismaClient.empresa.create({
            data: {
                nome: nome,
                cnpj: cnpj
            },
            select: {
                nome: true,
                cnpj: true
            }
        });
        return empresa;
    }

}

export { CreateEmpresaService }