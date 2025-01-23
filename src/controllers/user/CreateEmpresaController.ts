import { Request, Response } from 'express'
import { CreateEmpresaService } from "../../services/users/CreateEmpresaService"


class CreateEmpresaController {
    async handle(req: Request , res: Response) {
        const {
            nome,
            cnpj
        } = req.body

        const empresa = new CreateEmpresaService();
        try{
            const registrarEmpresa = await empresa.execute({
                nome,
                cnpj
            });
            return res.json(registrarEmpresa)

        } catch (err) {
            console.log("Erro ao cadastrar empresa" + err)
        }
    }
}

export { CreateEmpresaController }