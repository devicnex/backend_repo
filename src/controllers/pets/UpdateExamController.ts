import { UpdateExamService } from "../../services/pets/UpdateExamService"
import { Request, Response } from "express"

class UpdateExamController {
    async handle(req: Request, res: Response){
        const {id, data_exame, exame, clinica, observacao} = req.body

        const updateExam = new UpdateExamService();

        try{
            const update = updateExam.execute({ id, data_exame, exame, clinica, observacao});
            return res.json(update)

        } catch (err) {
            console.error("Erro ao atualizar exame" + err)
        }
    }
}

export { UpdateExamController }