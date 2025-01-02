import { Request, Response } from "express";
import { CuriosidadeService } from "../../services/api/CuriosidadeService";

let currentIndex = 0;  // Variável estática para rastrear o índice atual

class CuriosidadeController {
    async handle(req: Request, res: Response) {
        const curiosidadeService = new CuriosidadeService();
        try {
            const curiosidade = await curiosidadeService.getOneByIndex(currentIndex);
            if (curiosidade) {
                currentIndex++;
                return res.json(curiosidade);
            } else {
                return res.status(404).json({ error: "Nenhuma curiosidade encontrada" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export { CuriosidadeController };
