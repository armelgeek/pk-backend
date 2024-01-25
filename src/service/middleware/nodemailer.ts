// import * as nodemailer from 'nodemailer';

// import { configs } from '../../data/constants/configs';

// export type MailOptions = {
//   to: string;
//   subject: string;
//   body: string;
// };

// const { emailUser, emailPassword } = configs;

// export const sendMail = (options: MailOptions): Promise<any> => {
//   const { to, subject, body } = options;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: emailUser,
//       pass: emailPassword,
//     },
//   });
//   const mailOptions = {
//     to,
//     subject,
//     from: emailUser,
//     html: body,
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) reject(err);
//       resolve(info);
//     });
//   });
// };

require("dotenv").config();
import * as nodemailer from "nodemailer";
interface MailMessage {
  to: string;
  subject: string;
  body: string;
}

// const options = {
//   host: process.env.NODEMAILER_HOST,
//   port: 465,
//   secure: false,
//   auth: {
//     user: process.env.NODEMAILER_USER,
//     pass: process.env.NODEMAILER_PWD,
//   },
// };

// let transport = nodemailer.createTransport(options);


const mailFrom = process.env.EMAIL_FROM;

export const sendMail = async (message: MailMessage) => {
  let transport = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'no-reply@thoussein.fr', // generated ethereal user
      pass: 'notif-Selene2020', // generated ethereal password
      // user: 'pockerapps@gmail.com',
      // pass: 'PockerApps123',
    },
    // service: "Gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: false,
    // auth: {
    //   user: "pockerapps@gmail.com",
    //   pass: "PockerApps123",
    // },
  });

  const messageContent = {
    from: "pockerApps@gmail.com",
    to: message.to,
    subject: message.subject,
    html: message.body,
  };

  try {
    const info = await transport.sendMail(messageContent);
    console.log({ info });
    return info;
  } catch (error) {
    console.log({ error });
    return false;
  }
  
};
