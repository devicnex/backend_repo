import { Request, Response } from 'express';
import { CadastroVeterinarioService } from '../../services/veterinarios/CadastroVeterinarioService';

class CadastroVeterinarioController {
    async handle(req: Request, res: Response) {
        const { nome, email, telefone, crmv, cpf, status, clinica_id } = req.body;
        
        const createVeterinarioService = new CadastroVeterinarioService();

        const veterinario = await createVeterinarioService.execute({
            nome,
            email,
            telefone,
            crmv,
            cpf,
            clinica_id,
            status
        });

        return res.json(veterinario);
    }
}

export { CadastroVeterinarioController }