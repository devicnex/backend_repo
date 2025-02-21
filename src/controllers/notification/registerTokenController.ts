import { Request, Response } from 'express';
import { RegisterTokenService } from '../../services/notification/registerTokenService';

export class RegisterTokenController {
    async handle(req: Request, res: Response) {
        try{
            // console.log("SALVANDO O TOKEN!")
            const {user_id, token} = req.body;

            const salvandoToken = new RegisterTokenService();
            // console.log("Salvando Token AQUIII: " + salvandoToken)
            const salvatoken = await salvandoToken.execute({
                user_id,
                token
            });
            // console.log("SalvaToken ação do execute! ! ! ! ! : " + salvatoken)

            return res.json(salvatoken)
        } catch {

        }
    }
}


// const { user_id, token } = req.body;

//         if (!user_id || !token) {
//             return res.status(400).json({ error: "Dados inválidos" });
//         }

//         try {
//             const service = new RegisterTokenService();
//             await service.saveToken(user_id, token);
//             return res.json({ message: "Token salvo com sucesso!" });
//         } catch (error) {
//             return res.status(500).json({ error: "Erro ao registrar token" });
//         }
