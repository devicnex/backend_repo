    import { Request, Response } from "express";
    import { CriarConfiguracaoAgendaService } from "../../services/agendamento/ConfigAgendaService";

    class CriarConfiguracaoAgendaController {
    async handle(req: Request, res: Response) {
        const { id_clinica, dia_semana, inicio_turno, fim_turno, servico } = req.body;

        const service = new CriarConfiguracaoAgendaService();
        try {
        const result = await service.execute({
            id_clinica,
            dia_semana,
            inicio_turno,
            fim_turno,
            servico,
        });

        return res.json(result);
        } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao salvar configuração." });
        }
    }
    }

    export { CriarConfiguracaoAgendaController };
