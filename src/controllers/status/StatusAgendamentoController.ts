import { Request, Response } from "express";
import { StatusAgendamentoSerive } from "../../services/status/StatusAgendamentoService";

class StatusAgendamentoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;

        const agendamentoService = new StatusAgendamentoSerive();

        try {
            const resultado = await agendamentoService.execute(id, status);

            if (!resultado) {
                return res.status(404).json({ error: "Agendamento não encontrado." });
            }

            let mensagem = "";
            switch (status) {
                case 0:
                    mensagem = "Agendamento cancelado com sucesso";
                    break;
                case 1:
                    mensagem = "Agendamento confirmado com sucesso";
                    break;
                case 2:
                    mensagem = "Agendamento concluído com sucesso";
                    break;
            }

            return res.json({ message: mensagem });

        } catch (error) {
            console.log("Erro ao atualizar status: " + error);
            return res.status(500).json({ error: "Erro ao atualizar status" });
        }
    }
}

export { StatusAgendamentoController };
