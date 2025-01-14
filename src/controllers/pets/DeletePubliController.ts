import { Request, Response } from "express";
import { DeletePubliService } from "../../services/pets/DeletePubliService";

class DeletePubliController {
    async handle(req: Request, res: Response) {    
        const { id } = req.body;

        const deleteBlogService = new DeletePubliService();
        try{
            const publi = await deleteBlogService.execute(id);
            return res.json("Blog excluido com sucesso!");
        }catch(err){
            
        }

    }
}

export { DeletePubliController }