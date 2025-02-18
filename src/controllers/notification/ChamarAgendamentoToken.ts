import { Request, Response } from "express";
import { ChamarAgendamentoService } from "../../services/clinicas/ChamarAgendamentoService";

class TokenAgendamentoController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const service = new ChamarAgendamentoService();

        try {
            const agendamentos = await service.execute(user_id);
            return res.json(agendamentos);
        } catch (err) {
            console.log("Erro ao buscar agendamentos: ", err);
            return res.status(500).json({ error: "Erro ao buscar agendamentos" });
        }
    }
}

export { TokenAgendamentoController }