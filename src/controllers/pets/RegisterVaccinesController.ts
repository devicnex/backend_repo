import { Request, Response } from "express";
import { RegisterVaccinesService } from '../../services/pets/RegisterVaccinesService';



class RegisterVaccinesController {
    async handle(req: Request, res: Response) {
        console.log("ALI CAIUUUUUUUU AAAAAAAAAAAAAAAA LLIIIII")
        try{

        const {  
            data_vacinacao, 
            vacina, 
            clinica, 
            intervalo,
            observacao,
            pet_id,
            user_id 
        } =  req.body;

            console.log("Resultado do body: " , req.body)

            
            let img_lote;
            if (req.file) {
                img_lote = req.file.filename;
                console.log('Arquivo recebido com sucesso:', req.file);
            } else {
                console.log('Nenhuma imagem foi enviada.', req.file);
                
            }
            
            const registerVaccines = new  RegisterVaccinesService();
            const pet = await registerVaccines.execute({
                data_vacinacao,
                vacina,
                clinica,
                intervalo,
                img_lote,
                observacao,
                pet_id,
                user_id,
            }) 

            return res.json(pet);

        }catch(error) {
            console.log("Error ao Gravar dados no Banco" + error);
        }
    }
}

export { RegisterVaccinesController }