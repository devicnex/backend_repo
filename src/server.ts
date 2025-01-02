import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use('/tmp', express.static('tmp'));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    });
});

const sslOptions = {
    key: fs.readFileSync(__dirname + '/certificados/private.key'),
    cert: fs.readFileSync(__dirname + '/certificados/certificate.crt'),
    ca: fs.readFileSync(__dirname + '/certificados/ca_bundle.crt'),
};

const isProduction = process.env.NODE_ENV === 'production';
const port = 3333;

https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Servidor HTTPS online na porta ${port}`);
    console.log(`Ambiente: ${isProduction ? 'Produção' : 'Desenvolvimento'}`);
});
