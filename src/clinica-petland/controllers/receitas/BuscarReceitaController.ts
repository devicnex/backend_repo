import { Request, Response } from "express";
import { BuscarReceitaService } from "../../services/receitas/BuscarReceitaService";

class BuscarReceitaController {

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const receitasService = new BuscarReceitaService();
      const receita = await receitasService.execute(id);

      if (!receita) {
        return res.status(404).json({ error: "Receita não encontrada" });
      }

      return res.json(receita);
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
      return res.status(500).json({ error: "Erro ao buscar receita" });
    }
  }
}

export { BuscarReceitaController }
