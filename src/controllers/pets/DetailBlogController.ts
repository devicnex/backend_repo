import { Request, Response } from "express";
import { DetailBlogService } from "../../services/pets/DetailBlogService";

class DetailBlogController {
    async handle(req: Request, res: Response) {
        const detailPost = new DetailBlogService();

        try {
        const response = await detailPost.execute(); // Sem necessidade de passar id_blog

        if (!response || response.length === 0) {
            return res.status(404).json({ error: "Nenhum post encontrado" });
        }

        return res.json(response);
        } catch (err) {
        console.error("Erro ao retornar dados dos posts:", err);
        return res.status(500).json({ error: "Erro ao retornar os dados dos POSTS!" });
        }
    }
}

export { DetailBlogController };
