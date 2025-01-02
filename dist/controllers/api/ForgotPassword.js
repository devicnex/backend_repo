"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassword = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ForgotPasswordService_1 = require("../../services/users/ForgotPasswordService");
const smtp = nodemailer_1.default.createTransport({
    host: "smtp.emailemnuvem.com.br",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
function createResetPasswordHtml(id) {
    const url = `http://servidor:3000/auth/auth1/reset-password?id=${id}`;
    return `
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 64px;
                    margin: 0;
                    border-radius: 5px;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .button {
                    display: block;
                    padding: 10px;
                    background-color: #4570EA;
                    color: white;
                    text-align: center;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    margin-top: 64px;
                    margin-left: 16px;
                    margin-right: 16px;
                }
                .footer {
                    color: #999999;
                    margin-top: 60px;
                }
                .image {
                    max-width: 100%; 
                    height: auto;
                    text-align: center;
                    margin-bottom: 64px
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="image">
                <img src="https://helpdesk.icnex.com.br/img/petland/petland-logo.png" alt="Logo"/> 
                </div> 
                <h3 style="color: #333333;">Redefinição de Senha Guia dos Pets</h3>
                <p style="color: #666666;">Você solicitou a redefinição de senha. Clique no botão abaixo para redefinir sua senha:</p>
                <a href="${url}" class="button">Redefinir Senha</a>
                <p class="footer">Se você não solicitou a redefinição de senha, por favor ignore este e-mail.</p>
            </div>
        </body>
    </html>
    `;
}
class ForgotPassword {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            if (!email) {
                return res.status(400).json({ message: 'Email é obrigatório' });
            }
            const forgotPasswordService = new ForgotPasswordService_1.ForgotPasswordService();
            try {
                const user = yield forgotPasswordService.execute({ email });
                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
                const htmlContent = createResetPasswordHtml(user.id);
                const emailConfig = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Redefinição de senha",
                    html: htmlContent
                };
                const result = yield smtp.sendMail(emailConfig);
                smtp.close();
                return res.status(200).json({ message: 'Email enviado com sucesso!', result });
            }
            catch (error) {
                console.log('Erro ao enviar email:', error);
                return res.status(500).json({ message: 'Erro ao enviar email', error });
            }
        });
    }
}
exports.ForgotPassword = ForgotPassword;
