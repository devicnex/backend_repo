import { Request, Response } from "express";
import { DeleteVaccineService } from "../../services/pets/DeleteVaccineService";


class DeleteVaccineController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        if(!id) {
            //console.log("Vacina não econtrada, verifique");
        }
        const deleteVacinaService = new DeleteVaccineService();

        try{
            const vacina = await deleteVacinaService.execute(id);
            return res.json(vacina);
        } catch(error){
            //console.log("Erro ao excluir vacina" + error)
        }
    }
}

export {DeleteVaccineController}