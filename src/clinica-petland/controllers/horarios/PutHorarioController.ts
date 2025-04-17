import { Request, Response } from "express";
import { PutHorarioService } from "../../services/horarios/PutHorarioService";

class PutHorarioController {
    async handle(req: Request, res: Response){
        const {id, data_servico, horario_servico, id_veterinario} = req.body
        const updateHorario = new PutHorarioService();

        try{
            const update = updateHorario.execute({ id, data_servico, horario_servico, id_veterinario});
            console.log("Horario atualizado com sucesso!")
            return res.json(update)
        } catch (err) {
            console.log("Erro ao atualizar: " + err)
        }
    }
}

export { PutHorarioController }