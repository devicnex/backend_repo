import { Request, Response } from "express";
import { DeleteBlogService } from "../../services/pets/DeleteBlogService";

class DeleteBlogController {
    async handle(req: Request, res: Response) {    
        const { id } = req.body;

        const deleteBlogService = new DeleteBlogService();
        try{
            const blog = await deleteBlogService.execute(id);
            return res.json("Blog excluido com sucesso!");
        }catch(err){
            
        }

    }
}

export { DeleteBlogController }