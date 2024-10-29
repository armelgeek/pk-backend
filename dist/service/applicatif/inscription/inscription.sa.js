"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionSA = exports.InscriptionSA = exports.entierAleatoire = void 0;
// import { v4 as uuidV4 } from 'uuid';
const bcrypt = require("bcryptjs");
const mongodb_1 = require("mongodb");
const inscription_factory_1 = require("../../../constraint/factory/inscription/inscription.factory");
const http_status_1 = require("../../../data/constants/http-status");
const utilisateur_sm_1 = require("../../metier/utilisateur/utilisateur.sm");
const exception_handler_1 = require("../../middleware/exception-handler");
const nodemailer_1 = require("../../middleware/nodemailer");
const passport_local_1 = require("../../middleware/passport/passport-local");
const Profile_1 = require("../Profile");
const Profile_2 = require("../../../constraint/factory/Profile");
const ComplementaryInformation_1 = require("../ComplementaryInformation");
const sms_1 = require("../../middleware/sms");
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.entierAleatoire = entierAleatoire;
class InscriptionSA {
    constructor() {
        this.factory = inscription_factory_1.inscriptionFactory;
        this.profileFactory = Profile_2.profileFactory;
    }
    async createProfile(dto) {
        const { email, phone = '', nom = '', prenom = '', imageUrl = '' } = dto;
        const info = await ComplementaryInformation_1.complementaryinformationSA.create({
            email,
            phone,
        });
        return await Profile_1.profileSA.create({
            info: new mongodb_1.ObjectID(info === null || info === void 0 ? void 0 : info.id),
            photo: imageUrl,
            type: 'VIP',
            email,
            phone,
            nom,
            prenom,
            imageUrls: [],
            verified: false,
        });
    }
    async updateProfile(dto, profileId, id) {
        const { email, phone = '', nom = '', prenom = '', imageUrl = '' } = dto;
        const info = await ComplementaryInformation_1.complementaryinformationSA.partialUpdate(id, {
            email,
            phone,
        });
        return await Profile_1.profileSA.partialUpdate(profileId, {
            photo: imageUrl,
            type: 'VIP',
            email,
            phone,
            nom,
            prenom,
            imageUrls: [],
        });
    }
    async create(dto) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        try {
            const utilisateurDO = this.factory.toDo(dto);
            const { email, password, phone } = dto;
            let utilisateurByPhone = null;
            const utilisateurByEmailOrPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({ email });
            if (phone === null || phone === void 0 ? void 0 : phone.phoneNumber) {
                utilisateurByPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({
                    phone: phone
                });
            }
            // pour prevenir la verification de mail et telephone parce que si l'utilisateur s'inscrit de nouveau
            // il faut juste mettre a jour l'information
            if (utilisateurByEmailOrPhone || utilisateurByPhone) {
                if ((utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone.code) != null && (utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone.code) != "") {
                    const code = entierAleatoire(1111, 9999).toString();
                    const expirationDate = new Date();
                    expirationDate.setMinutes(expirationDate.getMinutes() + 5); // le code expire dans 10 Minutes
                    const updated = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
                        username: utilisateurDO.username,
                        password: await bcrypt.hashSync(utilisateurDO.password, 10),
                        email: utilisateurDO.email,
                        phone: utilisateurDO.phone,
                    });
                    if (!updated) {
                        return {
                            create: false,
                        };
                    }
                    const profile = await Profile_1.profileSA.findOneNotFail({ _id: utilisateurByEmailOrPhone.profileId || utilisateurByPhone.profileId });
                    await this.updateProfile(dto, utilisateurByEmailOrPhone.profileId || utilisateurByPhone.profileId, profile.info);
                    await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id || utilisateurByPhone._id, {
                        code,
                        codeExpireAt: expirationDate,
                        password: await bcrypt.hashSync(password, 10),
                    });
                    await (0, nodemailer_1.sendMail)({
                        to: email,
                        subject: '[Pockerapply] - Validation compte',
                        body: `
            Bonjour ${utilisateurDO.username || utilisateurDO.nom},
            <br /> <br />
            <span>
              <p>Voici votre code de validation: ${code} , le code expire dans 5 minutes.</p>
            <br />
            <br /> 
            Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
            <br /> <br /> <br />
            Cordialement,
            <br /> <br />
            L'équipe Pockerapply.
          `,
                    });
                    if (((_a = utilisateurDO.phone) === null || _a === void 0 ? void 0 : _a.callingCode) && ((_b = utilisateurDO.phone) === null || _b === void 0 ? void 0 : _b.phoneNumber)) {
                        await (0, sms_1.sendSMS)(`Bonjour ${utilisateurDO.username}, Voici votre code de validation: ${code} , le code expire dans 10 minutes. L'équipe Pockerapply`, `${(_c = utilisateurDO.phone) === null || _c === void 0 ? void 0 : _c.callingCode}${(_d = utilisateurDO.phone) === null || _d === void 0 ? void 0 : _d.phoneNumber}`);
                    }
                    return {
                        create: true,
                        utilisateur: {
                            ...updated,
                            profileId: profile === null || profile === void 0 ? void 0 : profile.id,
                        },
                    };
                }
                else {
                    if (utilisateurByEmailOrPhone) {
                        throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Email déjà existant');
                    }
                    else if (utilisateurByPhone) {
                        throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
                    }
                    else if (utilisateurByEmailOrPhone && utilisateurByPhone) {
                        // throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
                    }
                }
            }
            const code = entierAleatoire(1111, 9999).toString();
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 5); // le code expire dans 5 Minutes
            const saved = await utilisateur_sm_1.utilisateurSM.create(utilisateurDO);
            if (!saved) {
                return {
                    create: false,
                };
            }
            const profile = await this.createProfile(dto);
            await utilisateur_sm_1.utilisateurSM.partialUpdate(saved._id, {
                code,
                codeExpireAt: expirationDate,
                profileId: new mongodb_1.ObjectID(profile === null || profile === void 0 ? void 0 : profile.id),
                password: await bcrypt.hashSync(password, 10),
            });
            await (0, nodemailer_1.sendMail)({
                to: email,
                subject: '[Pockerapply] - Validation compte',
                body: `
        Bonjour ${utilisateurDO.username || utilisateurDO.nom},
        <br /> <br />
        <span>
          <p>Voici votre code de validation: ${code} , le code expire dans 5 minutes.</p>
        <br />
        <br /> 
        Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
        <br /> <br /> <br />
        Cordialement,
        <br /> <br />
        L'équipe Pockerapply.
        `,
            });
            if (((_e = utilisateurDO.phone) === null || _e === void 0 ? void 0 : _e.callingCode) && ((_f = utilisateurDO.phone) === null || _f === void 0 ? void 0 : _f.phoneNumber)) {
                await (0, sms_1.sendSMS)(`Bonjour ${utilisateurDO.username}, Voici votre code de validation: ${code} , le code expire dans 5 minutes. L'équipe Pockerapply`, `${(_g = utilisateurDO.phone) === null || _g === void 0 ? void 0 : _g.callingCode}${(_h = utilisateurDO.phone) === null || _h === void 0 ? void 0 : _h.phoneNumber}`);
            }
            return {
                create: true,
                utilisateur: {
                    ...saved,
                    profileId: profile === null || profile === void 0 ? void 0 : profile.id,
                },
            };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async socialAuth(dto) {
        try {
            const utilisateurDO = this.factory.toDo(dto);
            const { email, googleId, facebookId, appleId } = dto;
            const utilisateurByEmailOrPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({ email });
            let user = null;
            if (utilisateurByEmailOrPhone) {
                if (googleId) {
                    const { value } = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
                        googleId,
                    });
                    user = value;
                }
                else if (facebookId) {
                    const { value } = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
                        facebookId,
                    });
                    user = value;
                }
                else if (appleId) {
                    const { value } = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
                        appleId,
                    });
                    user = value;
                }
                const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(user);
                return {
                    accessToken,
                    refreshToken,
                    deviceToken: '',
                    utilisateur: { ...user },
                };
            }
            else {
                const saved = await utilisateur_sm_1.utilisateurSM.create(utilisateurDO);
                const profile = await this.createProfile(dto);
                const { value } = await utilisateur_sm_1.utilisateurSM.partialUpdate(saved._id, {
                    profileId: profile === null || profile === void 0 ? void 0 : profile.id,
                });
                const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(saved);
                return {
                    id: saved === null || saved === void 0 ? void 0 : saved._id,
                    create: true,
                    accessToken,
                    refreshToken,
                    deviceToken: '',
                    utilisateur: {
                        ...value,
                        profileId: profile === null || profile === void 0 ? void 0 : profile.id,
                    },
                };
            }
        }
        catch (error) {
            console.log('socialAuth error', error);
            return null;
        }
    }
    async reSendCode(dto) {
        var _a, _b, _c, _d;
        try {
            const { email, phone } = dto;
            console.log('====================================');
            console.log(email);
            console.log('====================================');
            let utilisateurByEmailOrPhone;
            if (utilisateurByEmailOrPhone) {
                utilisateurByEmailOrPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({
                    phone: phone
                });
            }
            else if (email) {
                utilisateurByEmailOrPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({ email });
            }
            if (!utilisateurByEmailOrPhone) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Utilisateur introuvable');
            }
            if (utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone.actif) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Utilisateur déjà actif');
            }
            const code = entierAleatoire(1111, 9999).toString();
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 5); // le code expire dans 10 Minutes
            const saved = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, { code, codeExpireAt: expirationDate });
            await (0, nodemailer_1.sendMail)({
                to: email,
                subject: '[Pokerapply] - Validation compte',
                body: `
      Bonjour ${utilisateurByEmailOrPhone.username || utilisateurByEmailOrPhone.nom},
      <br /> <br />
      <span>
        <p>Voici votre code de validation: ${code},le code expire dans 5 minutes.</p>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pockerapply.
      `,
            });
            if (((_a = utilisateurByEmailOrPhone.phone) === null || _a === void 0 ? void 0 : _a.callingCode) && ((_b = utilisateurByEmailOrPhone.phone) === null || _b === void 0 ? void 0 : _b.phoneNumber)) {
                await (0, sms_1.sendSMS)(`Bonjour ${utilisateurByEmailOrPhone.username}, Voici votre code de validation: ${code} , le code expire dans 5 minutes. L'équipe Pockerapply`, `${(_c = utilisateurByEmailOrPhone.phone) === null || _c === void 0 ? void 0 : _c.callingCode}${(_d = utilisateurByEmailOrPhone.phone) === null || _d === void 0 ? void 0 : _d.phoneNumber}`);
            }
            return saved;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async validationCode(dto) {
        try {
            const { email, code, phone } = dto;
            //let utilisateurByEmailOrPhone;
            /**if (phone) {
              utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ phone });
            } else if (email) {**/
            let utilisateurByEmailOrPhone = await utilisateur_sm_1.utilisateurSM.findOneNotFail({ email });
            //}
            if (!utilisateurByEmailOrPhone) {
                return {
                    validation: false,
                    expired: false,
                    userNotFound: true
                };
            }
            if ((utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone.code) == code) {
                if (utilisateurByEmailOrPhone.codeExpireAt && new Date(utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone.codeExpireAt) >= new Date()) {
                    const { value } = await utilisateur_sm_1.utilisateurSM.partialUpdate(utilisateurByEmailOrPhone === null || utilisateurByEmailOrPhone === void 0 ? void 0 : utilisateurByEmailOrPhone._id, {
                        code: '',
                        codeExpireAt: null,
                        actif: true,
                    });
                    const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(value);
                    return {
                        id: value === null || value === void 0 ? void 0 : value._id,
                        validation: true,
                        expired: false,
                        userNotFound: false,
                        accessToken,
                        refreshToken,
                        deviceToken: '',
                        utilisateur: value,
                    };
                }
                else {
                    this.reSendCode({ email, phone });
                    return {
                        validation: false,
                        expired: true,
                        userNotFound: false
                    };
                }
            }
            else {
                return {
                    validation: false,
                    expired: false,
                    userNotFound: false
                };
            }
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.InscriptionSA = InscriptionSA;
exports.inscriptionSA = new InscriptionSA();
//# sourceMappingURL=inscription.sa.js.map