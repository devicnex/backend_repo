import { Request, Response } from "express";
import { BuscarTodosServicosService } from "../../services/buscarServicos/BuscarTodosServicosService";

class BuscarTodosServicosController {
    async handle(req: Request, res: Response) {
        const servicos = await new BuscarTodosServicosService().execute();
        return res.json(servicos)
    }
}

export { BuscarTodosServicosController }