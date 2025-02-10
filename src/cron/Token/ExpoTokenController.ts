import { Request, Response } from 'express';
import { ExpoTokenService } from './ExpoTokenService';

export class ExpoTokenController {
    // Registrar um novo token
    static async registerToken(req: Request, res: Response) {
        const { user_id, token } = req.body;

        if (!user_id || !token) {
            return res.status(400).json({ error: "Dados inválidos" });
        }

        try {
            await ExpoTokenService.saveToken(user_id, token);
            return res.json({ message: "Token salvo com sucesso!" });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao registrar token" });
        }
    }

    // Buscar todos os tokens
    static async getTokens(req: Request, res: Response) {
        try {
            const tokens = await ExpoTokenService.getAllTokens();
            return res.json(tokens);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar tokens" });
        }
    }
}
