import { Request, Response } from "express"
import { UpdateVeterinarioService } from "../../services/veterinarios/UpdateVeterinarioService"

class UpdateVeterinarioController {
    async handle(req: Request, res: Response) {
        const {id, email, telefone} = req.body
        const updateVeterinario = new UpdateVeterinarioService();

        try{
            const update = updateVeterinario.execute({ id, email, telefone});
            console.log("Atualizado com sucesso! !! ! !! ! !!");
            
            return res.json(update)
        } catch(err) {
            console.log("Erro ao atualizar dados do veterinario" + err)
        }
    }
}

export { UpdateVeterinarioController }