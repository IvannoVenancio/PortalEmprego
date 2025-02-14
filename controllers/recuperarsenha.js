
const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient()
const { findUserByEmail } = require("../services/UserService");

exports.recuperarsenha = async (req, res) => {
    try {
        res.render('recuperarsenha');
    } catch (error) {
        console.error('Erro ao carregar a página de recuperação:', error);
        res.status(500).send('Erro interno no servidor');
    }
};

exports.enviarEmailRecuperacao = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).send('E-mail não encontrado!');
        }

        // Gerar um token de recuperação
        const token = require('crypto').randomBytes(32).toString('hex');
        const expiracao = new Date();
        expiracao.setHours(expiracao.getHours() + 1); // Expira em 1 hora

        await prisma.user.update({
            where: { email },
            data: { resetToken: token, resetTokenExpiracao: expiracao },
        });

        // Configuração do serviço de e-mail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'seuemail@gmail.com',
                pass: 'suasenha',
            },
        });

        // Enviar o e-mail
        const link = `http://localhost:3992/resetarsenha/${token}`;
        await transporter.sendMail({
            from: '"Digma Works" <suporte@digmaworks.com>',
            to: email,
            subject: 'Recuperação de Senha',
            html: `<p>Clique no link abaixo para redefinir sua senha:</p><a href="${link}">${link}</a>`,
        });

        res.send('E-mail enviado com sucesso! Verifique sua caixa de entrada.');
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).send('Erro ao enviar e-mail.');
    }
};