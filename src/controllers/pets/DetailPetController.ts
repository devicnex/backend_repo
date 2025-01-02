// DetailPetController.ts
import { Request, Response } from 'express';
import { DetailPetService } from '../../services/pets/DetailPetService';

class DetailPetController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        //console.log(user_id);
        if (!user_id) {
            return res.status(400).json({ error: 'User ID is missing' });
        }

        const detailPetService = new DetailPetService();

        try {
            const pet = await detailPetService.execute(user_id);
            return res.json(pet);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export { DetailPetController };
