import { Request, Response } from "express";
import { CadastroClinicaService } from "../../services/user/CadastroClinicaService";

class CadastradoClinicaController {
    async handle(req: Request, res: Response) {
        console.log(req.body);
        const {
        responsavel,
        password,
        razaoSocial,
        email,
        telefone,
        cnjp,
        cep,
        endereco,
        numero,
        uf,
        cidade,
        complemento = '',
        } = req.body;

        const createClinicaService = new CadastroClinicaService();

        const clinica = await createClinicaService.execute({
            responsavel,
            password,
            razaoSocial,
            email,
            telefone,
            cnjp,
            cep,
            endereco,
            numero,
            uf,
            cidade,
            complemento,
        });

        return res.json(clinica);
    }
}

export { CadastradoClinicaController}