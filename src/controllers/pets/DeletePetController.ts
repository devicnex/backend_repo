import { Request, Response } from "express";
import { DeletePetService } from '../../services/pets/DeletePetService';

class DeletePetController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID do pet não fornecido!" });
        }

        const deletePetService = new DeletePetService();
        try {
            const result = await deletePetService.execute(id);
            return res.json(result);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

export { DeletePetController };
