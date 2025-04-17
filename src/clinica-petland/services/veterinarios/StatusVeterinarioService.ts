import prismaClient from "../../../prisma";

class StatusVeterinarioService {
    async execute(id: string, status: number){

        if(status !== 0 && status !== 1){
            throw new Error("Status inválido")
        }

        try{
            const atulizarStaus = await prismaClient.veterinarios.updateMany({
                where:{
                    id: id,
                    status: status === 0 ? 1 : 0,
                },
                data:{
                    status: status
                }
            });

            return atulizarStaus.count > 0;

        } catch (err) {
            console.log("Erro ao atualizar status:" + err);
            throw new Error("Erro ao atualizar status");
        }
    }
}

export { StatusVeterinarioService };