import { Request, Response } from "express";
import { DeleteExamService } from "../../services/pets/DeleteExamService"

class DeleExamController {

    async handle(req: Request , res: Response){
        const {id} = req.body

        if(!id){
            //console.log("Exame não encontrado!")
        }
        const deleteExamService = new DeleteExamService();

        try{
            const exame = await deleteExamService.execute(id);
            return res.json(exame)
        } catch(error) {
            console.error("Erro ao deletar exame" + error)
        }
    }
}

export { DeleExamController }