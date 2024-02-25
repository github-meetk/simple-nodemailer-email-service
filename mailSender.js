import nodemailer from "nodemailer";

export const mailSender = async (from, password, to, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            auth : {
                user : from,
                pass : password,
            }
        })

        let info = await transporter.sendMail({
            from : 'Rentez',
            to : `${to}`,
            subject : `${title}`,
            html : `${body}`,
        })
        return info;

    } catch (error) {
        console.log(error);
    }
}