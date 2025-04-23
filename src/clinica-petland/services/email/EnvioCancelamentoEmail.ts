import nodemailer from "nodemailer";

interface EmailCancel {
    email: string;
    nomePaciente: string;
    dataAgendamento: string;
    horaAgendamento: string;
    // nomeEmpresa: string;
}

const smtp = nodemailer.createTransport({
    host: "smtp.emailemnuvem.com.br",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function createCancelamentoHtml(nomePaciente: string, data: string, hora: string,) {  // nomeEmpresa: string
    return `
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Cancelamento de Serviço</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f4f8;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 40px auto;
                    padding: 30px;
                    background-color: #ffffff;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    border-radius: 8px;
                }
                .title {
                    color: #0a528f;
                    margin-bottom: 20px;
                }
                .text {
                    color: #444444;
                    line-height: 1.5;
                }
                .footer {
                    color: #888888;
                    font-size: 13px;
                    margin-top: 30px;
                    text-align: center;
                }
                .image-placeholder {
                    margin: 30px auto;
                    text-align: center;
                }
                .image-placeholder img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2 class="title">Cancelamento de Serviço</h2>
                <p class="text">Olá ${nomePaciente},</p>
                <p class="text">Informamos que o seu agendamento para o dia <strong>${data}</strong> às <strong>${hora}</strong> foi cancelado.</p>
                <p class="text">Se desejar reagendar, entre em contato conosco.</p>
                
                <div class="image-placeholder">
                    <img src="https://helpdesk.icnex.com.br/img/petland/petEmail.jpg" alt="Imagem Pet" style="width:300px; height:auto;">
                </div>
            </div>
        </body>
        </html>`

}

class EnvioCancelEmailService {
    async execute({ email, nomePaciente, dataAgendamento, horaAgendamento,}: EmailCancel) {
        const htmlContent = createCancelamentoHtml(nomePaciente, dataAgendamento, horaAgendamento,);

        const emailConfig = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Cancelamento de Agendamento",
            html: htmlContent
        };

        const result = await smtp.sendMail(emailConfig);
        smtp.close();

        return result;
    }
}

export { EnvioCancelEmailService };
