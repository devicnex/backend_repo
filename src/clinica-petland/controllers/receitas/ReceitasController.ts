import { Request, Response } from "express";
import { ReceitasService } from "../../services/receitas/ReceitasService";

class ReceitasController {
    
    async gerarReceita(req: Request, res: Response){
        try {
            const link = await ReceitasService(req.body);
            return res.status(200).json({ link });
        } catch (error) {
            console.error("Erro ao gerar receita:", error);
            return res.status(500).json({ error: "Erro ao gerar receita" });
        }
    };
}

export { ReceitasController }


