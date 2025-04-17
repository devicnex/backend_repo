import { Request, Response } from "express";
import { BuscarHorarioService } from "../../services/agendamento/BuscarHorarioService";


    class BuscarHorarioController {
        async handle(req: Request, res: Response) {
            const { tipo, sub_categoria } = req.params;
        
            const tipo_selecionado = Number(tipo);
            const subCategoriaSelecionada = sub_categoria || null;
            if (isNaN(tipo_selecionado)) {
                return res.status(400).json({ error: "O parâmetro 'tipo' deve ser um número válido." });
            }
        
            const horarioService = new BuscarHorarioService();
            try {
                // Passa ambos os parâmetros
                const response = await horarioService.execute(tipo_selecionado, subCategoriaSelecionada);
                return res.json(response);
            } catch (erro) {
                console.error("Erro ao retornar os dados: " + erro);
                return res.status(500).json({ error: "Erro ao retornar os dados" });
            }
        }
        
    }

export { BuscarHorarioController };
