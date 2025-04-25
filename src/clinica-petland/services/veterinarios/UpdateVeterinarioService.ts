import prismaClient from "../../../prisma";

interface VetenarioUpdate {
    id: string
    email: string
    telefone: string
}

class UpdateVeterinarioService {
    async execute({ id, email, telefone}: VetenarioUpdate ) {
        try{
            const verificaVeterinario = prismaClient.veterinarios.findFirst({
                where: {
                    id: id
                },
            })
            if(!verificaVeterinario){
                throw Error('Veterinario não encontrado!')
            } else {
                const update = prismaClient.veterinarios.update({
                    where: {
                        id: id
                    }, data: {
                        email, telefone
                    }
                })
                return update
            }
        } catch (err) {
            console.log("Erro ao atualizar veterinario" + err)
        }
    }

}

export { UpdateVeterinarioService }