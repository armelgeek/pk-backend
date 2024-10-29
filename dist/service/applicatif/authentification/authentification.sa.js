"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentificationSA = exports.AuthentificationSA = void 0;
/* eslint-disable class-methods-use-this */
const bcrypt = require("bcryptjs");
const http_status_1 = require("../../../data/constants/http-status");
const utilisateur_sm_1 = require("../../metier/utilisateur/utilisateur.sm");
const exception_handler_1 = require("../../middleware/exception-handler");
const nodemailer_1 = require("../../middleware/nodemailer");
const passport_local_1 = require("../../middleware/passport/passport-local");
const utilisateur_sa_1 = require("../utilisateur/utilisateur.sa");
const inscription_sa_1 = require("../inscription/inscription.sa");
const sms_1 = require("../../middleware/sms");
class AuthentificationSA {
    findByEmail(email) {
        return utilisateur_sm_1.utilisateurSM.findOne({ email, actif: true });
    }
    findByEmailUsers(email) {
        return utilisateur_sm_1.utilisateurSM.findOne({ email });
    }
    findByEmailOrUsernameOrPhoneUsers(email) {
        return utilisateur_sm_1.utilisateurSM.findOne({ email });
    }
    findById(id) {
        return utilisateur_sm_1.utilisateurSM.findById(id);
    }
    validatePassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
    async passwordResetRequestBo(email, boHost) {
        try {
            const found = await utilisateur_sa_1.utilisateurSA.findOneNotFail({ email });
            if (!found) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Email non trouvé dans la base de données');
            }
            const { nomPrenom } = found;
            const resetToken = (0, passport_local_1.generateResetToken)(found);
            const link = `${boHost}/reset-password?resetToken=${resetToken}`;
            await (0, nodemailer_1.sendMail)({
                to: email,
                subject: '[Dev FullStack] - Rénitialisation mot de passe',
                body: `
      Bonjour ${nomPrenom},
      <br /> <br />
      <span>
        <p>Veuillez cliquer sur le bouton ci-dessous pour changer votre mot de passe: </p>
        <a style="padding: 4px 16px; text-decoration: none; color: #FFF; background: #1D5C42; border-radius: 5px;" href="${link}">Changer mot de passe</a>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de ce changement de mot de passe, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Dev FullStack.
      `,
            });
            return true;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async renewalPwdBO(user) {
        var _a, _b, _c, _d;
        const { email, phone, ...found } = user;
        try {
            if (email) {
                await (0, nodemailer_1.sendMail)({
                    to: email,
                    subject: '[Pockerapply] - Demande de rénitialisation de mot de passe',
                    body: `
        Bonjour ${found.username},
        <br /> 
        Je vous écris pour vous demander de bien vouloir procéder à la réinitialisation de mon mot de passe.
        Je vous remercie par avance pour votre aide.
        <br /> <br /> <br />
        Cordialement,
        <br /> <br />
        L'équipe Pockerapply.
        `,
                });
            }
            else if (found && ((_a = found.phone) === null || _a === void 0 ? void 0 : _a.callingCode) && ((_b = found.phone) === null || _b === void 0 ? void 0 : _b.phoneNumber)) {
                await (0, sms_1.sendSMS)(`Bonjour ${found.username}, Merci de rénitialisation votre mot de passe. L'équipe Pockerapply`, `${(_c = found.phone) === null || _c === void 0 ? void 0 : _c.callingCode}${(_d = found.phone) === null || _d === void 0 ? void 0 : _d.phoneNumber}`);
            }
            return "ok";
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async passwordResetRequest({ email, phone }, boHost) {
        var _a, _b, _c, _d;
        try {
            let found;
            if (email) {
                found = await utilisateur_sa_1.utilisateurSA.findOneNotFail({ email });
            }
            else {
                found = await utilisateur_sa_1.utilisateurSA.findOneNotFail({ phone });
            }
            if (!found) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Email non trouvé dans la base de données');
            }
            const code = (0, inscription_sa_1.entierAleatoire)(1111, 9999).toString();
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 5); // le code expire dans 10 Minutes
            await utilisateur_sm_1.utilisateurSM.partialUpdate(found.id, { code, codeExpireAt: expirationDate });
            if (email) {
                await (0, nodemailer_1.sendMail)({
                    to: email,
                    subject: '[Pockerapply] - Rénitialisation mot de passe',
                    body: `
        Bonjour ${found.username},
        <br /> <br />
        <span>
          <p>Voici votre code de rénitialisation: ${code}</p>
        <br />
        <br /> 
        Si vous n'êtes pas à l'origine de ce changement de mot de passe, veuillez ignorer ce mail.
        <br /> <br /> <br />
        Cordialement,
        <br /> <br />
        L'équipe Pockerapply.
        `,
                });
            }
            else if (found && ((_a = found.phone) === null || _a === void 0 ? void 0 : _a.callingCode) && ((_b = found.phone) === null || _b === void 0 ? void 0 : _b.phoneNumber)) {
                await (0, sms_1.sendSMS)(`Bonjour ${found.username}, Voici votre code de rénitialisation: ${code}. L'équipe Pockerapply`, `${(_c = found.phone) === null || _c === void 0 ? void 0 : _c.callingCode}${(_d = found.phone) === null || _d === void 0 ? void 0 : _d.phoneNumber}`);
            }
            return true;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async twoFactorAuthentication({ email, phone }, boHost) {
        var _a, _b, _c, _d;
        try {
            let found;
            if (email) {
                found = await utilisateur_sa_1.utilisateurSA.findOneNotFail({ email });
            }
            else {
                found = await utilisateur_sa_1.utilisateurSA.findOneNotFail({ phone });
            }
            if (!found) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Email non trouvé dans la base de données');
            }
            const code = (0, inscription_sa_1.entierAleatoire)(1111, 9999).toString();
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 5); // le code expire dans 10 Minutes
            await utilisateur_sm_1.utilisateurSM.partialUpdate(found.id, { code, codeExpireAt: expirationDate });
            if (email) {
                await (0, nodemailer_1.sendMail)({
                    to: email,
                    subject: '[Pockerapply] - Authentification à deux facteurs',
                    body: `
        Bonjour ${found.username},
        <br /> <br />
        <span>
          <p>Voici votre d' authentification à deux facteurs: ${code}</p>
        <br />
        <br /> 
        Si vous n'êtes pas à l'origine de ce changement de L'authentification à deux facteurs, veuillez ignorer ce mail.
        <br /> <br /> <br />
        Cordialement,
        <br /> <br />
        L'équipe Pockerapply.
        `,
                });
            }
            else if (found && ((_a = found.phone) === null || _a === void 0 ? void 0 : _a.callingCode) && ((_b = found.phone) === null || _b === void 0 ? void 0 : _b.phoneNumber)) {
                await (0, sms_1.sendSMS)(`Bonjour ${found.username}, Voici votre code d' authentification à deux facteurs : ${code}. L'équipe Pockerapply`, `${(_c = found.phone) === null || _c === void 0 ? void 0 : _c.callingCode}${(_d = found.phone) === null || _d === void 0 ? void 0 : _d.phoneNumber}`);
            }
            return true;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async resetPassword(id, password) {
        return await utilisateur_sa_1.utilisateurSA.resetPassword(id, password);
    }
}
exports.AuthentificationSA = AuthentificationSA;
exports.authentificationSA = new AuthentificationSA();
//# sourceMappingURL=authentification.sa.js.map