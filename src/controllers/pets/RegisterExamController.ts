    import { Request, Response } from 'express';
    import { RegisterExamService } from '../../services/pets/RegisterExamService';

    class RegisterExamController {
    async handle(req: Request, res: Response) {
        const {
        data_exame,         
        exame,         
        clinica,         
        observacao,         
        pet_id,         
        } = req.body;         

        let img_laudo = 'img_padrao.png';

        if (req.file) {
        img_laudo = req.file.filename; 
        }

        if (!data_exame || !exame || !clinica || !observacao || !img_laudo || !pet_id) {
        return res.status(400).json({ error: 'Algum campo está vazio, preencha!' });
        }

        const registerExam = new RegisterExamService();
        try {
            const pet = await registerExam.execute({
                data_exame,
                exame,
                clinica,
                observacao,
                img_laudo,
                pet_id,
            });

        return res.json(pet);
        } catch (error) {
        console.error("Erro ao registrar exame:", error);
        return res.status(500).json({ error: 'Erro ao registrar exame' });
        }
    }
    }

    export { RegisterExamController };
