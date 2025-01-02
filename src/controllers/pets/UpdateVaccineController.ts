import { UpdateVaccineService } from "../../services/pets/UpdateVaccineService"
import { Request, Response } from "express"

class UpdateVaccineController {
    async handle(req: Request , res: Response) {
        const {id, data_vacinacao, vacina, clinica, intervalo, observacao} = req.body
        const updateVaccine = new UpdateVaccineService();

        try{
            const update = updateVaccine.execute({id, data_vacinacao, vacina, clinica, intervalo, observacao});
            return res.json(update)
        } catch (err) {
            console.error("Erro ao atualizar vacina!" + err);
            throw Error("Erro ao atualizar vacina!" + err);
        }
    } 
}

export { UpdateVaccineController }