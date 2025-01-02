import { UpdateUserDataService } from '../../services/users/UpdateUserDataService';
import { Response, Request } from 'express';

class UpdateUserDataController {
    async handle(req: Request, res: Response) {
        const {
            id,
            name,
            email,
            cpfcnpj,
            telefone,
            cep,
            endereco,
            complemento,
            numero,
            bairro,
            cidade,
            estado,
            status,
        } = req.body;
        console.log('caiu aqyu')
        const updateUser = new UpdateUserDataService();

        let img_usuario;
        if (req.file) {
            img_usuario = req.file.filename; // Nome do arquivo salvo pelo multer
            console.log('Arquivo recebido com sucesso:', req.file);
        } else {
            console.log('Nenhuma imagem foi enviada.', req.file);

        }

        try {
            const update = await updateUser.execute({
                id,
                name,
                email,
                cpfcnpj,
                telefone,
                cep,
                endereco,
                complemento,
                numero,
                bairro,
                cidade,
                estado,
                status,
                img_usuario, // Adicionando a imagem ao registro
            });

            return res.json(update);
        } catch (err) {
            console.error('Erro ao gravar os dados:', err);
            return res.status(500).json({ error: 'Erro ao gravar os dados' });
        }
    }
}

export { UpdateUserDataController };
