import { Request, Response } from "express";
import { DetailVaccinesService } from '../../services/pets/DetailVaccinesService'


class DetailVaccinesController{

    async handle(req: Request, res: Response) {
    const { pet_id } = req.params;
    // console.log(pet_id)

    if(!pet_id) {
        return res.json('Paramentro ID Vazio')
    }
        const datailVaccines = new DetailVaccinesService();
        try {
            const detail = await datailVaccines.execute(pet_id);
            return res.json(detail);
        }catch(error) {
            console.log("erro ao realizar a busca" + error);
        }
    }

}

export { DetailVaccinesController }