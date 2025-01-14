import { Request, Response } from "express";
import { DetailExamService } from '../../services/pets/DetailExamService'


class DetailExamController {

    async handle(req: Request, res: Response) {
    const { pet_id } = req.params;

        if(!pet_id) {
            return res.json('Parametro ID Vazio')
        }

        const datailExam = new DetailExamService();
        try {
            const detail = await datailExam.execute(pet_id);
            return res.json(detail);
        }catch(error) {
            console.log("erro ao realizar a busca" + error);
        }
    
    }

}

export { DetailExamController }