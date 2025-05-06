import { Request, Response } from "express";
import { AtualizacaoStatusHorarioService } from "../../services/status/AtualizacaoStatusHorarioService";

class AtualizacaoHorarioController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;

        const horarioService = new AtualizacaoStatusHorarioService();

        try {
            const resultado = await horarioService.execute(id, status);

            if (!resultado) {
                return res.status(404).json({ error: "Horário não encontrado ou já está no status desejado." });
            }

            const mensagens: { [key: number]: string } = {
                0: "Horário expirado sem agendamento",
                1: "Horário disponível novamente",
                2: "Horário reservado com sucesso",
                3: "Horário cancelado/expirado com sucesso",
                4: "Consulta realizada com sucesso"
            };

            const mensagem = mensagens[status] || "Status atualizado com sucesso.";

            return res.json({ message: mensagem });
        } catch (err) {
            console.log("Erro ao atualizar status: " + err);
            return res.status(500).json({ error: "Erro ao atualizar status do horário" });
        }
    }
}

export { AtualizacaoHorarioController };
