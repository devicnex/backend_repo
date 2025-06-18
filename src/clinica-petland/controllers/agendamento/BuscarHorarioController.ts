import { Request, Response } from "express";
import { BuscarHorarioService } from "../../services/agendamento/BuscarHorarioService";


    class BuscarHorarioController {
        async handle(req: Request, res: Response) {
            const { servico } = req.params;
        
            if (!servico) {
                return res.status(400).json({ error: "O parâmetro 'serviço' é obrigatório." });
            }
        
            const horarioService = new BuscarHorarioService();
            try {
                const response = await horarioService.execute(servico);
                return res.json(response);
            } catch (erro) {
                console.error("Erro ao retornar os dados: " + erro);
                return res.status(500).json({ error: "Erro ao retornar os dados" });
            }
        }
        
    }

export { BuscarHorarioController };
