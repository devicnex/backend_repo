

import { Request, Response } from "express";
import { BuscarHorarioAllService } from "../../../clinica-petland/services/agendamento/BuscarHorariosAll";

export class BuscarHorarioAllController {
    private agendamentoService: BuscarHorarioAllService;
    
    constructor() {
        this.agendamentoService = new BuscarHorarioAllService();
    }

    async handle(req: Request, res: Response) {
    
        const searchorario = new BuscarHorarioAllService()
        const response = await searchorario.execute()

        return res.json(response);
    }

    async handleAgendamentos(req: Request, res: Response) {
        try {
            const response = await this.agendamentoService.BuscarAgendamentos();
            return res.json(response)
        }catch(err) {
            return res.json(err)
        }
        
    }
}