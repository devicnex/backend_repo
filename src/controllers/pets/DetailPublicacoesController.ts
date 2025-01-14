import { Request, Response } from "express";
import { DetailPublicacoesService } from "../../services/pets/DetailPublicacoesService";

class DetailPublicacoesController {
    async handle(req: Request, res: Response){
        const detailPublicacoes = new DetailPublicacoesService();

        try{
            const response = await detailPublicacoes.execute();

            return res.json(response);
        } catch (err){
            console.log("Erro ao retornar dados dos posts:" , err)
        }
    }
}

export { DetailPublicacoesController };