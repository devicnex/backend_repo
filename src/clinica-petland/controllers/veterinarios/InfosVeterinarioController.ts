import { Request, Response } from 'express';
import { InfosVeterinarioService } from '../../services/veterinarios/InfosVeterinarioService';

class InfosVeterinarioController {
    async handle(req: Request, res: Response){
        const  clinica_id  = req.clinica_id;

        if(!clinica_id){
            return res.status(400).json({error: "Id da clinica não encontrado!"})
        }

        const infosVeterinario = new InfosVeterinarioService();

        try {
            const veterinarios = await infosVeterinario.handle(clinica_id);
            return res.json(veterinarios);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
};

export { InfosVeterinarioController};