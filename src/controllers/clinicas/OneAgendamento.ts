import { Request, Response } from "express";
import { OneAgendamentoService } from "../../services/clinicas/OneAgendamento";

export class OneAgendamentoController {
    async handle(req: Request, res: Response){
        const { id } = req.params
        try{
            const chamarAgendamento = new OneAgendamentoService
            const resultadoAgendamento = await chamarAgendamento.execute(id)

            return res.json(resultadoAgendamento)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}