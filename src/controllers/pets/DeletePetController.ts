import { Request, Response } from "express";
import { DeletePetService }  from '../../services/pets/DeletePetService';


class DeletePetController {
    async handle(req: Request, res: Response) {
        console.log(req)        
        const { id } = req.body;
        
        //console.log(id)
    if(!id) {
        //console.log("Pet Não encontrado, verifique");
    }
    const deletePetService = new DeletePetService();
    try{
        const pet = await deletePetService.execute(id);
        return res.json(pet);
    }catch(err){
        //console.log("Erro ao excluir o pet" + err);
    }

    }
}



export {DeletePetController}