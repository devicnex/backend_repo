import { Response, Request  } from "express";
import { BlogPetService } from "../../services/pets/BlogPetService"

class BlogPetController {
    async handle(req: Request, res: Response) {
        console.log("Estou em cima do body !!!!   ! ! ! ! ! ! ! !! !1")
        const {
            conteudo,
            pet_id,
        } = req.body;

        console.log("Eu sou o body!!!!!!! " , req.body)

        const registerBlog = new BlogPetService();

        let img_blog = '';

        console.log("Aqui é o FIILEEEEEEEEEEEEEEEE", req.file)
        if (req.file) {
        img_blog = req.file.filename; 
        }
        try{
            const blog = await registerBlog.execute({
                conteudo,
                pet_id,
                img_blog,
            });
        return res.json(blog)  
        } catch (err) {
            console.error("Erro ao publicar blog" + err);
        }
    } 
}

export { BlogPetController }