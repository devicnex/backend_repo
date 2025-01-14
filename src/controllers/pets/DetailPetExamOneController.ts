import { Request, Response } from "express";
import { DetalPetExamOneService } from "../../services/pets/DetailPetExamOneService"

export class DetailPetExamOneController {
    async handle(req: Request, res: Response) {
        const { id_exame } = req.params
        try{
            const instanceExame = new DetalPetExamOneService();
            const resultExame = await instanceExame.execute(id_exame);
            return res.json(resultExame);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}