import { Request, Response } from "express";
import { ServicoPutStatusService } from "../../services/status/ServicoPutStatusService";

class ServicoPutStatusController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;

        const statusVeterinarioService = new ServicoPutStatusService();

        try {
            const resultado = await statusVeterinarioService.execute(id, status);

            if (!resultado) {
                return res.status(404).json({ error: "Serviço não encontrado ou já está no status desejado." });
            }

            const mensagem = status === 1 ? "Serviço ativado com sucesso" : "Serviço desativado com sucesso";

            return res.json({ message: mensagem });

        } catch (error) {
            console.log("Erro ao atualizar status: " + error);
            return res.status(500).json({ error: "Erro ao atualizar status" });
        }
    }
}
export { ServicoPutStatusController };