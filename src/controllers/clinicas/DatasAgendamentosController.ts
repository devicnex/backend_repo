import { Request, Response } from "express";
import { DatasAgendamentosService } from "../../services/clinicas/DatasAgendamentosService";

class DatasAgendamentosController {
    async handle( req: Request, res: Response) {
        const {
            clinica,
            data_servico,
            horario_servico,
        } = req.body

        if(!clinica || !data_servico || !horario_servico){
            return res.status(400).json({ error: 'Algum campo está vazio, preencha!'})
        }
        const dataAgendamento = new DatasAgendamentosService();
        try{
            const agendamento = await dataAgendamento.execute({
                clinica,
                data_servico,
                horario_servico,
            });
            return res.json(agendamento)
        } catch ( error ) {
            console.error('Erro ao registrar exame:', error);
            return res.status(500).json({ error: 'Erro ao registrar data'})
        }
    }
}

export { DatasAgendamentosController }