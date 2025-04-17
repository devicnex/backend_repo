import prismaClient from "../../prisma"

export class OneAgendamentoService {
    async execute(id: string){

        try{
            const response = await prismaClient.agendamentos.findFirst({
                where: {
                    id: id
                },
                include: {
                    pets: true,
                    horarios: true,
                    clinicas: true, 
                    servicos: true,
                }
            })
            return response
        } catch (err) {
            console.log('Erro ao chamar agendamento!')
        }
    }
}