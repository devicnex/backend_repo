import nodemailer from "nodemailer";

const smtp = nodemailer.createTransport({
    host: 'smtp.emailemnuvem.com.br',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

class EnvioFormulario {
    async execute({name, email, mensagem}: { name: string; email: string; mensagem: string }) {
        const html = `
        <h2>Novo contato via formulário</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/> ${mensagem}</p>
    `;

        const emailConfig = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Contato de ${name}`,
            html: html
        };

        return await smtp.sendMail(emailConfig)
    }
}

export { EnvioFormulario };