import admin from "firebase-admin";
import path from "path";

// 🔹 Carrega o arquivo JSON do Firebase Admin SDK
const serviceAccount = require(path.join(__dirname, "./firebase_credencial/petland-28b16-firebase-adminsdk-fbsvc-668c088a75.json"));

// 🔹 Inicializa o Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export default admin;
