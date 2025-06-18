import { Request, Response } from "express";
import { BuscarServicoService } from "../../services/clinicas/BuscarServicoService";

class BuscarServicoController {
    async handle(req: Request, res: Response) {

        const clinica_id = req.clinica_id
        console.log(clinica_id)

        if(!clinica_id){
            return res.status(400).json({error: "Id não encontrado!"})
        }

        const detailServicos = new BuscarServicoService();

        const detail = await detailServicos.handle(clinica_id);

        return res.json(detail)
    }
}

export { BuscarServicoController }