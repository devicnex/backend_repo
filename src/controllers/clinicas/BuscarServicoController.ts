import { Request, Response } from "express";
import { BuscarServicoService } from "../../services/clinicas/BuscarServicoService";

class BuscarServicoController {
    async handle(req: Request, res: Response) {

        const detailServicos = new BuscarServicoService();

        const detail = await detailServicos.execute();

        return res.json(detail)
    }
}

export { BuscarServicoController }