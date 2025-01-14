import { Request, Response } from 'express';  
import { DetailPetVaccinesOneService } from '../../services/pets/DetailPetVaccinesOneService' 


export class DetailPetVaccinesOneController { 

    async handle(req: Request, res: Response) { 
        const { id_vacinne } = req.params 
        try { 
            const instanceVaccine = new DetailPetVaccinesOneService(); 
            const resultVaccine = await instanceVaccine.execute(id_vacinne);  
            return res.json(resultVaccine); 
        }catch(err) { 
            return res.status(400).json(err) 
        } 

    }
}