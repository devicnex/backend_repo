import prismaClient from "../../../prisma";

interface CriarServicoInput {
    servico: string;
    tempo: string;
    clinica_id: string;
    }

    class ServicosService {
    async execute({ servico, tempo, clinica_id }: CriarServicoInput) {
        const clinicaExiste = await prismaClient.clinica.findFirst({
        where: { id: clinica_id }
        });

        if (!clinicaExiste) {
        throw new Error("Clínica não encontrada.");
        }

        const ultimoServico = await prismaClient.servicos.findFirst({
        orderBy: { seq_id: 'desc' }
        });

        const novoSeqId = (ultimoServico?.seq_id || 0) + 1;

        const novoServico = await prismaClient.servicos.create({
        data: {
            seq_id: novoSeqId,
            servico,
            tempo,
            clinica_id,
            status: 1
        }
        });

        return novoServico;
    }
    }

export { ServicosService }