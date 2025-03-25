import { Request, Response } from "express";
import { GetHorariosService } from "../../services/horarios/GetHorarioService";

class GetHorarioController {
    async handle(req: Request, res: Response) {
        const { id_clinica } = req.params;

        const horarioService = new GetHorariosService()

        try{
            const response = await horarioService.execute(id_clinica);
            return res.json(response)
        } catch (err) {
            console.log("Erro ao buscar horarios" + err)
        }
    }
}

export { GetHorarioController }