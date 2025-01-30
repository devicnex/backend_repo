import { Request, Response } from "express";
import { AtualizacaoStatusHorarioService } from "../../services/status/AtualizacaoStatusHorarioService";

class AtualizacaoHorarioController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { status } = req.body;

        const horarioService = new AtualizacaoStatusHorarioService();

        try {
            const resultado = await horarioService.execute(id, status);

            if (!resultado) {
                return res.status(404).json({ error: "Horário não encontrado ou já está no status desejado." });
            }

            const mensagem = status === 2 ? "Horário reservado com sucesso" : "Horário disponível novamente";

            return res.json({ message: mensagem });
        } catch (err) {
            console.log("Erro ao atualizar status: " + err);
            return res.status(500).json({ error: "Erro ao atualizar status do horário" });
        }
    }
}

export { AtualizacaoHorarioController };
