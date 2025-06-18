    import { Request, Response } from "express";
    import { GerarHorariosMensalService } from "../../services/agendamento/GerarHorariosMensalService";

    class GerarHorariosMensalController {
    async handle(req: Request, res: Response) {
        const { id_clinica, id_veterinario, mes } = req.body;

        const service = new GerarHorariosMensalService();
        try {
        const resultado = await service.execute({ id_clinica, id_veterinario, mes });
        return res.json(resultado);
        } catch (err) {
        console.error(err);
        return res.status(400).json({ error: err.message || "Erro ao gerar horários." });
        }
    }
    }

    export { GerarHorariosMensalController };
