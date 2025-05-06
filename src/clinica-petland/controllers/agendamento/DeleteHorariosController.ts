import { Request, Response } from "express";
import { DeleteHorarioService } from "../../services/agendamento/DeleteHorariosService";

class DeleteHorarioController {
    async handle(req: Request, res: Response) {
        const deleteHorario = new DeleteHorarioService();

        try {
            const horario = await deleteHorario.execute();
            return res.json(horario);
        } catch(err) {
            console.error("Erro ao deletar horário: ", err);
            return res.status(500).json({ error: "Erro ao deletar horário!" });
        }
    }
}

export { DeleteHorarioController }