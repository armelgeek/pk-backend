"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
require("dotenv").config();
const nodemailer = require("nodemailer");
;
const sendMail = async (message) => {
    let transport = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: "pockerapps@gmail.com",
            pass: "epfk fpho svfw euvq",
        },
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
    }
    catch (error) {
        console.log({ error });
        return false;
    }
};
exports.sendMail = sendMail;
//# sourceMappingURL=nodemailer.js.map