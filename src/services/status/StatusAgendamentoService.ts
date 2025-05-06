import prismaClient from "../../prisma";

class StatusAgendamentoSerive {
    async execute(id: string, status: number) {
        if (![0, 1, 2].includes(status)) {
            throw new Error("Status inválido!");
        }

        try {
            const atualizaStatus = await prismaClient.agendamentos.update({
                where: {
                    id: id
                },
                data: {
                    status: status
                }
            });

            return !!atualizaStatus;

        } catch (error) {
            console.log("Erro ao atualizar status: " + error);
            throw new Error("Erro ao atualizar status");
        }
    }
}

export { StatusAgendamentoSerive };
