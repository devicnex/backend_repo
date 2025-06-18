import { Request, Response } from "express";
import { ServicosService } from "../../services/agendamento/ServicosService";

class ServicoController {
  async handle(req: Request, res: Response) {
    const { servico, tempo, clinica_id } = req.body;

    const service = new ServicosService();

    try {
      const result = await service.execute({ servico, tempo, clinica_id });
      return res.json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { ServicoController }