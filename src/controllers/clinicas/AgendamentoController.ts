import { Request, Response } from "express";
import { AgendamentoService } from "../../services/clinicas/AgendamentoService";

class AgendamentoController {
    async handle(req: Request , res: Response) {
        const {
            pet_id,
            id_horario,
            id_empresa,
            id_servico
        } = req.body

        const agendar = new AgendamentoService();
        try{
            const agendamento = await agendar.execute({
                pet_id,
                id_horario,
                id_empresa,
                id_servico
            });
            return res.json(agendamento)
        } catch (err) {
            console.log("Erro ao agendar: ", err)
        }
    }
}

export { AgendamentoController }