import { Request, Response } from "express";
import { AgendamentoService } from "../../services/clinicas/AgendamentoService";

class AgendamentoController {
    async handle(req: Request , res: Response) {
        const {
            pet_id,
            id_horario,
            id_clinica,
            id_servico,
            data_agendamento,
            horario_agendamento,
            user_id
        } = req.body

        const agendar = new AgendamentoService();
        try{
            const agendamento = await agendar.execute({
                pet_id,
                id_horario,
                id_clinica,
                id_servico,
                data_agendamento,
                horario_agendamento,
                user_id,
            });
            return res.json(agendamento)
        } catch (err) {
            console.log("Erro ao agendar: ", err)
        }
    }
}

export { AgendamentoController }