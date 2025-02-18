import { Request, Response } from 'express';
import { BuscarTokenService } from '../../services/notification/buscaTokenService';

export class BuscarTokenController {
    // 🔍 Buscar token de UM usuário específico pelo user_id
    async getTokenByUserId(req: Request, res: Response) {
        try {
            const { user_id } = req.params;
            if (!user_id) {
                return res.status(400).json({ error: "user_id é obrigatório" });
            }

            const service = new BuscarTokenService();
            const token = await service.getTokenByUserId(user_id);

            if (!token) {
                return res.status(404).json({ error: "Token não encontrado" });
            }

            return res.json({ token });
        } catch (error) {
            console.error(`Erro ao buscar token para user_id ${req.params.user_id}:`, error);
            return res.status(500).json({ error: "Erro ao buscar token" });
        }
    }
}
