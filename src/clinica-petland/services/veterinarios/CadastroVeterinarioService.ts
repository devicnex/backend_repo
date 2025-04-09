import  prismaClient from "../../../prisma"

interface VeterinarioRequest {
    nome: string;
    email: string;
    telefone: string;
    crmv: string;
    cpf: string;
    clinica_id: string;
    status: number;
}

class CadastroVeterinarioService {

    async execute({ nome, email, telefone, crmv, cpf, clinica_id, status }: VeterinarioRequest ) {
        const veterinarioVerificaExiste = await prismaClient.veterinarios.findFirst({
            where: {
                crmv: crmv,
                cpf: cpf,
            },
        })

        if (veterinarioVerificaExiste) {
            throw new Error('CRMV ou CPF já cadastrado!')
        }
        
        try {
            const veterinario = await prismaClient.veterinarios.create({
                data: {
                    nome,
                    email,
                    telefone,
                    crmv,
                    cpf,
                    clinica_id,
                    status: 1   
                },
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    crmv: true,
                    cpf: true,
                    clinica_id: true,
                    status: true
                }
            })
            return veterinario;
        } catch (err) {
            console.log("Erro ao cadastrar veterinario : " + err)
        }
    }

}

export { CadastroVeterinarioService }