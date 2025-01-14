import { UpdatePubliService } from "../../services/pets/UpdatePubliService";
import { Request, Response } from "express";

class UpdatePubliController {
    async handle(req: Request, res: Response) {
        const { id, conteudo } = req.body;

        if (!id || !conteudo) {
            return res.status(400).json({ error: "Campos 'id' e 'conteudo' são obrigatórios" });
        }

        const updateBlog = new UpdatePubliService();

        try {
            const update = await updateBlog.execute({ id, conteudo });
            return res.json(update);
        } catch (err) {
            console.error("Erro ao atualizar:", err);
            return res.status(500).json({ error: "Erro interno ao atualizar o blog" });
        }
    }
}

export { UpdatePubliController };
