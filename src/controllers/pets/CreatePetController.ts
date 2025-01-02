import { Request, Response } from 'express';
import { CreatePetService } from "../../services/pets/CreatePetService";

class CreatePetController {
    async handle(req: Request, res: Response) {

        console.log('📦 Body:', req.body);
        try {
            console.log('Recebendo os dados do pet...');
            const {
                name,
                apelido,
                especie,
                idade,
                meses,
                raca,
                chip,
                sexo,
                temperamento,
                tamanho,
                detalhes,
                user_id
            } = req.body;
    
            console.log('Arquivo recebido pelo multer:', req.file, "Dados REQ BODY", req.body);
            
            let img_perfil = "avatar_standard.png";
            if (req.file) {
                img_perfil = req.file.filename;
            } else {
                console.log('⚠️ Arquivo não encontrado no req.file');
            }
    
            const createPetService = new CreatePetService();
            const pet = await createPetService.execute({
                name,
                apelido,
                especie,
                idade,
                meses,
                raca,
                chip,
                sexo,
                temperamento,
                tamanho,
                detalhes,
                img_perfil,
                user_id
            });
    
            return res.json(pet);
    
        } catch (error) {
            console.error('Erro no upload:', error);
            return res.status(500).json({ error: 'Ocorreu um erro ao salvar o pet' });
        }
    }
}
    
export { CreatePetController };
