    import admin from "../../../config/firebaseAdmin";

    interface NotificacaoCancelamento {
    token: string;
    nomePaciente: string;
    data: string;
    hora: string;
    }

    class EnvioNotificacaoCancelamentoService {
    async execute({ token, nomePaciente, data, hora }: NotificacaoCancelamento) {
        const title = "Agendamento Cancelado";
        const body = `Olá ${nomePaciente}, seu agendamento em ${data} às ${hora} foi cancelado.`;

        const notificationPayload = {
        token,
        notification: {
            title,
            body,
        },
        data: {
            type: "cancelamento",
        },
        };

        console.log("🔔 Enviando notificação para token:", token);
        console.log("📨 Conteúdo da notificação:", {
        title,
        body,
        data: notificationPayload.data
        });

        try {
        const response = await admin.messaging().send(notificationPayload);

        console.log("✅ Notificação enviada com sucesso:");
        console.log("📦 Firebase response:", response);

        return {
            success: true,
            response,
        };
        } catch (error: any) {
        console.error("🚨 Erro ao enviar notificação push:");
        console.error("🔧 Detalhes:", error?.errorInfo || error?.message || error);

        return {
            success: false,
            error,
        };
        }
    }
    }

    export { EnvioNotificacaoCancelamentoService };
