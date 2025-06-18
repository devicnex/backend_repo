    import { Request, Response } from "express";
    import { HorarioService } from "../../services/agendamento/HorariosService";

    class HorarioController {
    async handle(req: Request, res: Response) {
        const {
        datas,
        horario_servico,
        id_servico,
        id_clinica,
        id_veterinario,
        status,
        } = req.body;

        const horario = new HorarioService();

        try {
        const resultado = await horario.execute({
            datas,
            horario_servico,
            id_servico,
            id_clinica,
            id_veterinario,
            status,
        });

        return res.json(resultado);
        } catch (error: any) {
        console.error("Erro ao registrar horários:", error.message);
        return res.status(400).json({ error: error.message });
        }
    }
    }

    export { HorarioController };
