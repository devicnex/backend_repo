import { Request, Response } from "express";
import { StatusAgendamentoSerive } from "../../services/status/StatusAgendamentoService";

class StatusAgendamentoController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { status } = req.body;

        const agendamentoService = new StatusAgendamentoSerive();

        try{
            const resultado = await agendamentoService.execute(id, status);

            if(!resultado){
                return res.status(404).json({ error: "Agendamento não encontrado ou já está no status desejado." });
            }

            const mensagem = status === 1 ? "Agendamento confirmado com sucesso" : "Agendamento cancelado com sucesso";

            return res.json({ message: mensagem });

        } catch (error){
            console.log("Erro ao atualizar status: " + error);
            return res.status(500).json({ error: "Erro ao atualizar status" });
        }
    }

}

export { StatusAgendamentoController };