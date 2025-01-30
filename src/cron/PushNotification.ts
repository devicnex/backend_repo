import prismaClient from '../prisma';

const expo = new Notifications.Expo();

export const sendPushNotification = async (userId: string, message: string) => {
    try {
        // Buscar o token do usuário no banco de dados
        const user = await prismaClient.user.findUnique({ where: { id: userId } });

        if (!user?.pushToken) {
            console.warn(`Usuário ${userId} não tem token de notificação.`);
            return;
        }

        if (!Notifications.Expo.isExpoPushToken(user.pushToken)) {
            console.warn(`Token inválido: ${user.pushToken}`);
            return;
        }

        // Enviar notificação
        const chunks = expo.chunkPushNotifications([
            {
                to: user.pushToken,
                sound: 'default',
                body: message,
                data: { withSome: 'data' },
            },
        ]);

        for (const chunk of chunks) {
            await expo.sendPushNotificationsAsync(chunk);
        }

        console.log(`Notificação enviada para usuário ${userId}`);
    } catch (error) {
        console.error('Erro ao enviar notificação:', error);
    }
};
