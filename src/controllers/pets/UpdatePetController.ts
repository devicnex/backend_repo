import { Request, Response } from "express";
import { UpdatePetService } from "../../services/pets/UpdatePetService";

class UpdatePetController{
    async handle(req: Request, res: Response){
        const {id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes} = req.body

        let img_perfil;
        
        if(req.file) {
            img_perfil = req.file.filename;
        }
        const updatePet = new UpdatePetService();

        try{
            const update = updatePet.execute({id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil });
            return res.json({
                message: "Pet Atualizado com sucesso!",
                pet: update})
        } catch (err) {
            console.error("Erro ao atualizar Pet!" + err)
        }
    }
}

export { UpdatePetController }