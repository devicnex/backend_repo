import prismaClient from "../../prisma";

class AtualizacaoStatusHorarioService {
    async execute(id: string , status: number){
        
        if(status !== 1 && status !== 2){
            throw new Error("Status inválido!");
        }

        try{
            const atualizaStatus = await prismaClient.horarios.updateMany({
                where: {
                    id: id,
                    status: status === 1 ? 2 : 1, // Verifica qual é o status atual para permitir a reversão
                },
                data: {
                    status: status
                } 
            });

            return atualizaStatus.count > 0;

        } catch (err){
            console.log("Erro ao atualizar status: " + err);
            throw new Error("Erro ao atualizar status");
        }
    }
}

export { AtualizacaoStatusHorarioService };
