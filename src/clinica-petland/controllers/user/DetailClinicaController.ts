import { Request, Response } from "express";
import { DetailClinicaService } from "../../services/user/DetailClinicaService";

class DetailClinicaController {
    async handle(req: Request, res: Response) {

        const clinica_id = req.clinica_id!;

        const deitalClinica = new DetailClinicaService();

        const clinica =  await deitalClinica.execute(clinica_id);

        return res.json(clinica)
    }
}
    
export { DetailClinicaController }