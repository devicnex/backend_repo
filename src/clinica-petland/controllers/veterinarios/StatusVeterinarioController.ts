import { Request, Response } from "express";
import { StatusVeterinarioService } from "../../services/veterinarios/StatusVeterinarioService";

class StatusVeterinarioController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;

        const statusVeterinarioService = new StatusVeterinarioService();

        try {
            const resultado = await statusVeterinarioService.execute(id, status);

            if (!resultado) {
                return res.status(404).json({ error: "Veterinário não encontrado ou já está no status desejado." });
            }

            const mensagem = status === 1 ? "Veterinário ativado com sucesso" : "Veterinário desativado com sucesso";

            return res.json({ message: mensagem });

        } catch (error) {
            console.log("Erro ao atualizar status: " + error);
            return res.status(500).json({ error: "Erro ao atualizar status" });
        }
    }
}
export { StatusVeterinarioController };