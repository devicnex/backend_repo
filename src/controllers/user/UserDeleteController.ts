import { Request, Response } from "express";
import { UserDeleteService }  from '../../services/users/UserDeleteService';


class UserDeleteController {
    async handle(req: Request, res: Response) {
        console.log(req)        
        const { id } = req.body;

        if(!id) {
            console.log("Usuário Não encontrado, verifique");
        }
        const deleteUserService = new UserDeleteService();
        try{
            const user = await deleteUserService.execute(id);
            return res.json(user);
        }catch(err){
            console.log("Erro ao excluir usuário" + err);
        }
    }
}



export { UserDeleteController }