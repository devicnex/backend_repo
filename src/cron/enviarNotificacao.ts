import { Request, Response } from "express";
import admin from "../config/firebaseAdmin";  // 🔹 Importa a configuração do Firebase Admin

export class SendNotificationController {
    async handle(req: Request, res: Response) {
        const { token, title, body } = req.body;

        if (!token || !title || !body) {
            return res.status(400).json({ error: "Token, título e corpo são obrigatórios." });
        }

        // 🔹 Monta a notificação
        const notificationPayload = {
            token,
            notification: {
                title,
                body,
            },
            data: { type: "lembrete" }
        };

        try {
            // 🔹 Envia a notificação pelo Firebase Cloud Messaging (FCM)
            const response = await admin.messaging().send(notificationPayload);
            console.log("✅ Notificação enviada:", response);

            return res.status(200).json({ success: true, response });
        } catch (error) {
            console.error("🚨 Erro ao enviar notificação:", error);
            return res.status(500).json({ error: "Erro ao enviar notificação", details: error });
        }
    }
}
