import { Request, Response } from "express";
import fetch from "node-fetch";

export class SendNotificationController {
    async handle(req: Request, res: Response) {
        const { token, title, body } = req.body;

        if (!token || !title || !body) {
            return res.status(400).json({ error: "Token, título e corpo são obrigatórios." });
        }

        const notificationPayload = {
            to: token,
            sound: "default",
            title,
            body,
            data: { type: "lembrete" }
        };

        try {
            const response = await fetch("https://exp.host/--/api/v2/push/send", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(notificationPayload)
            });

            const result = await response.json();
            console.log("✅ Notificação enviada:", result);
            return res.status(200).json({ success: true, result });
        } catch (error) {
            console.error("🚨 Erro ao enviar notificação:", error);
            return res.status(500).json({ error: "Erro ao enviar notificação" });
        }
    }
}
