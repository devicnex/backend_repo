import { Request, Response } from "express";
import { EnvioFormulario } from "../../services/email/EnvioFormulario";

class EnvioFormularioController {
    async handle ( req: Request, res: Response) {
        const { name, email, mensagem } = req.body;

        if (!name || !email || !mensagem ) {
            return res.status(400).json({ error: "Preencha todos os campos!" });
        }
        const envioFormulario = new EnvioFormulario();
        try{
            await envioFormulario.execute({ name, email, mensagem });
            return res.status(200).json({ message: "Email enviado com sucesso!" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao enviar o email!" });
        }
    }
}

export { EnvioFormularioController};