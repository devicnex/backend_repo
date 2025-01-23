import { Request, Response } from "express";
import { HorarioService } from "../../services/clinicas/HorariosService";

class HorarioController {
    async handle(req: Request, res: Response) {
        const { data_servico, horario_servico, tipo, sub_categoria, id_empresa, status } = req.body;

        const horario = new HorarioService();
        try {
            const agendamento = await horario.execute({
                data_servico,
                horario_servico,
                tipo,
                sub_categoria: sub_categoria || null,
                id_empresa,
                status,
            });
            return res.json(agendamento);
        } catch (error) {
            console.error('Erro ao registrar:', error.message);
            return res.status(400).json({ error: error.message });
        }
    }
}

export { HorarioController };
