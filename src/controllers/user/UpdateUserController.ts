import { Request, Response } from "express";
import { UpdateUserService} from "../../services/users/UpdateUserService"
import { compare } from "bcryptjs";


class UpdateUserController{

    async handle(request: Request, response: Response){
        console.log(request)
        const {password} = request.body;
        const user_id = request.user_id;
        
        const updateUpdate = new UpdateUserService()
        
        
        
        const user = await updateUpdate.execute({
            user_id,
            password
        })

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Senha Atual incorreta!");
        }

        return response.json(user)
    }
}

export {UpdateUserController}