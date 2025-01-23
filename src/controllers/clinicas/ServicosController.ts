import { Request, Response } from "express";
import { ServicosService } from "../../services/clinicas/ServicosService";

class ServicoController {
    async handle( req: Request, res: Response) {
        const {
            nome,
            tipo,
            status,
        } = req.body

        const dataAgendamento = new ServicosService();
        try{
            const agendamento = await dataAgendamento.execute({
                nome,
                tipo,
                status,
            });
            return res.json(agendamento)
        } catch ( error ) {
            console.error('Erro ao registrar:', error);
            return res.status(500).json({ error: 'Erro ao registrar!'})
        }
    }
}

export { ServicoController }