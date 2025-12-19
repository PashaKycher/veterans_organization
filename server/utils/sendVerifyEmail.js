import nodemailer from "nodemailer";

export const sendVerifyEmail = async (email, verifyUrl) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `"Клуб Захисників" <${process.env.SMTP_EMAIL}>`,
        to: email,
        subject: "Підтвердження доступу до спільноти",
        html: `
            <p>Ви отримали цей лист, оскільки була створена реєстрація на платформі ветеранської спільноти.</p>

            <p>Для підтвердження електронної адреси та активації доступу перейдіть за посиланням нижче:</p>

            <p>
                <a href="${verifyUrl}" style="display:inline-block;padding:10px 18px;border-radius:6px; background:#2F3E46;color:#ffffff;text-decoration:none;">
                    Підтвердити електронну адресу
                </a>
            </p>

    <p>Посилання дійсне протягом 1 години.</p>

    <p style="margin-top:16px;color:#555;">
        Якщо ви не ініціювали реєстрацію, проігноруйте цей лист.
    </p>
        `,
    });
};
