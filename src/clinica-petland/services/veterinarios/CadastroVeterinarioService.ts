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
        const verificaCrmvExiste = await prismaClient.veterinarios.findFirst({
            where: {
                crmv: crmv,
            },
        })

        const verificaCpfExiste = await prismaClient.veterinarios.findFirst({
            where: {
                cpf: cpf,
            },
        })

        const ultimo = await prismaClient.veterinarios.findFirst({
            orderBy: {
            seq_id: 'desc'
            },
            select: {
            seq_id: true
            }
        });
        
        const proximoSeqId = (ultimo?.seq_id || 0) + 1;

        if (verificaCrmvExiste) {
            throw new Error('CRMV já cadastrado!')
        }

        if (verificaCpfExiste) {
            throw new Error('CPF já cadastrado!')
        }
        
        try {
            const veterinario = await prismaClient.veterinarios.create({
                data: {
                    seq_id: proximoSeqId,
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
                    seq_id: true,
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