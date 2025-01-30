import prismaClient from "../../prisma";

class StatusAgendamentoSerive {
    async execute(id: string , status: number){

        if(status !== 0 && status !== 1){
            throw new Error("Status inválido!")
        }

        try{
            const atualizaStatus = await prismaClient.agendamentos.updateMany({
                where: {
                    id: id,
                    status: status === 0 ? 1 : 0,
                },
                data: {
                    status: status
                }
            });

            return atualizaStatus.count > 0;

        } catch (error){
            console.log("Erro ao atualizar status: " + error);
            throw new Error("Erro ao atualizar status");
        }
    }
}

export { StatusAgendamentoSerive}