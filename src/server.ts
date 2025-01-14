// import express, { Request, Response, NextFunction } from 'express';
// import 'express-async-errors';
// import cors from 'cors';
// import fs from 'fs';
// import https from 'https';
// import { router } from './routes';

// const app = express();

// app.use(express.json());

// // Configuração personalizada do CORS
// app.use(cors({
//     origin: 'https://petland.vet.br', // Domínio do seu frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true // Habilita envio de cookies e cabeçalhos de autorização
// }));

// app.use('/tmp', express.static('tmp'));
// app.use(router);

// // Middleware para tratamento de erros
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//         return res.status(400).json({
//             error: err.message
//         });
//     }
//     return res.status(500).json({
//         status: 'error',
//         message: 'Internal server error'
//     });
// });

// // Caminhos para os arquivos do certificado SSL
// const sslOptions = {
//     key: fs.readFileSync('/var/www/vhosts/petland.vet.br/httpdocs/backend/private.key'),
//     cert: fs.readFileSync('/var/www/vhosts/petland.vet.br/httpdocs/backend/certificate.crt'),
//     ca: fs.readFileSync('/var/www/vhosts/petland.vet.br/httpdocs/backend/ca_bundle.crt'),
// };

// // Servidor HTTPS
// https.createServer(sslOptions, app).listen(3333, () => {
//     console.log('Servidor HTTPS online na porta 3333');
// });


import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(cors());

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





const isProduction = process.env.NODE_ENV === 'production';
const port = 3333;

app.listen(port, () => console.log(`PET LAND ESTÁ ONLINE - PORTA: ${port}` ));