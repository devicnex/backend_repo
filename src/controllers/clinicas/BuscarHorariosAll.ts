

import { Request, Response } from "express";
import { BuscarHorarioAllService } from "../../services/clinicas/BuscarHorariosAll";

export class BuscarHorarioAllController {
    async handle(req: Request, res: Response) {
    
    const searchorario = new BuscarHorarioAllService()
    const response = await searchorario.execute()

    return res.json(response);



    }
}