    import express, { Request, Response, NextFunction } from 'express';
    import 'express-async-errors';
    import cors from 'cors';
    import fs from 'fs';
    import https from 'https';
    import path from 'path';
    import { router } from './routes';
    import { iniciarCron } from './cron/index'

    const app = express();
    app.use(express.json());
    app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
    }));

    app.use(router);



    const uploadsPath = path.join(__dirname, '..', 'tmp');

    console.log("🔹 Servindo arquivos estáticos de:", uploadsPath);

    app.use('/tmp', express.static(uploadsPath));

    // Middleware global de tratamento de erros
    app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof Error) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.status(500).json({
        status: 'error',
        message: 'Internal server error.',
    });
    });

    // 🔹 Verifica se está em produção ou desenvolvimento
    iniciarCron();
    const isProduction = process.env.NODE_ENV === 'production';
    const port = 3333;

    // Caminho correto dos certificados (caso esteja em produção)
    const certPath = '/var/www/vhosts/petland.vet.br/httpdocs/backend/certificados/';

    if (isProduction) {
    // 🔒 Produção - Carrega os certificados SSL e inicia com HTTPS
    const sslOptions = {
        key: fs.readFileSync(path.join(certPath, 'private.key')),
        cert: fs.readFileSync(path.join(certPath, 'certificate.crt')),
        ca: fs.readFileSync(path.join(certPath, 'ca_bundle.crt')),
    };

    https.createServer(sslOptions, app).listen(port, () => {
        console.log(`✅ Servidor HTTPS rodando na porta ${port}`);
        console.log(`🌎 Ambiente: Produção`);
    });

    } else {
        // 🚀 Desenvolvimento - Inicia o servidor HTTP normalmente
        app.listen(port, () => {
            console.log(`🚀 Servidor HTTP rodando na porta ${port} (Modo DEV)`);
        });
    }
