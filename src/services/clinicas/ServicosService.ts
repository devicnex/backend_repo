import prismaClient from "../../prisma";

interface Servicos {
    nome : string
    tipo: number
    status: number
}

class ServicosService {
    async execute({ nome, tipo, status}: Servicos){

        const datasAgendamento = await prismaClient.servicos.create({
            data: {
                nome: nome,
                tipo: tipo,
                status: status,
            },
            select: {
                nome: true,
                tipo: true,
                status: true,
            }
        });
        return datasAgendamento
    }

}

export { ServicosService }