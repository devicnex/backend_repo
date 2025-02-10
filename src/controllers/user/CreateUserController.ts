import { Request, Response } from 'express';
import { CreateUserService } from '../../services/users/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        console.log(req.body);
        const { 
            name, 
            email, 
            password, 
            bairro = '', 
            cep = '', 
            cidade = '', 
            complemento = '', 
            cpfcnpj = '', 
            endereco = '', 
            estado = '', 
            numero = '', 
            telefone = '', 
            status = '',
        } = req.body;
        
        const createUserService = new CreateUserService();
        
        const user = await createUserService.execute({
            name,
            email,
            password,
            bairro,
            cep,
            cidade,
            complemento,
            cpfcnpj,
            endereco,
            estado,
            numero,
            telefone,
            status,
        });
        
        return res.json(user);
    }
}

export { CreateUserController };
