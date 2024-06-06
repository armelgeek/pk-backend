// import { v4 as uuidV4 } from 'uuid';
import * as bcrypt from 'bcryptjs';
import { ObjectID } from 'mongodb';

import { inscriptionFactory } from '../../../constraint/factory/inscription/inscription.factory';
import { HttpStatus } from '../../../data/constants/http-status';
import { InscriptionRequestDTO } from '../../../data/dto/inscription/inscription-request.dto';
import {
  ResendCodeRequestDTO,
  ValidationCodeRequestDTO,
} from '../../../data/dto/inscription/re-send-code-request.dto';
import { utilisateurSM } from '../../metier/utilisateur/utilisateur.sm';
import { Exception } from '../../middleware/exception-handler';
import { sendMail } from '../../middleware/nodemailer';
import { generateTokens } from '../../middleware/passport/passport-local';
import { profileSA } from '../Profile';
import { profileFactory } from '../../../constraint/factory/Profile';
import { complementaryinformationSA } from '../ComplementaryInformation';
import { baseinformationSA } from '../BaseInformation';
import { sendSMS } from '../../middleware/sms';

export function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class InscriptionSA {
  private factory = inscriptionFactory;
  private profileFactory = profileFactory;

  async createProfile(dto: InscriptionRequestDTO) {
    const { email, phone = '', nom = '', prenom = '', imageUrl = '' } = dto;
    const info = await complementaryinformationSA.create({
      email,
      phone,
    });
    return await profileSA.create({
      info: new ObjectID(info?.id),
      photo: imageUrl,
      type: 'VIP',
      email,
      phone,
      nom,
      prenom,
      imageUrls: [],
    });
  }

  async updateProfile(dto: InscriptionRequestDTO, profileId: number | string, id: number | string) {
    const { email, phone = '', nom = '', prenom = '', imageUrl = '' } = dto;
    const info = await complementaryinformationSA.partialUpdate(id, {
      email,
      phone,
    });
    return await profileSA.partialUpdate(profileId, {
      photo: imageUrl,
      type: 'VIP',
      email,
      phone,
      nom,
      prenom,
      imageUrls: [],
    });
  }

  async create(dto: InscriptionRequestDTO) {
    try {
      const utilisateurDO = this.factory.toDo(dto);
      const { email, password, phone } = dto;
      let utilisateurByPhone = null;
      const utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });

      if (phone?.phoneNumber) {
        utilisateurByPhone = await utilisateurSM.findOneNotFail({
          phone: phone
        });
      }
      // pour prevenir la verification de mail et telephone parce que si l'utilisateur s'inscrit de nouveau
      // il faut juste mettre a jour l'information
      if (utilisateurByEmailOrPhone || utilisateurByPhone) {
        if (utilisateurByPhone.code != null && utilisateurByPhone.code != "" && utilisateurByEmailOrPhone.code != null && utilisateurByEmailOrPhone.code != "") {

          const code = entierAleatoire(1111, 9999).toString();
          const expirationDate = new Date();
          expirationDate.setMinutes(expirationDate.getMinutes() + 10); // le code expire dans 10 Minutes

          const updated = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id || utilisateurByPhone._id, {
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

          const profile = await profileSA.findOneNotFail({ _id: utilisateurByEmailOrPhone.profileId || utilisateurByPhone.profileId });

          await this.updateProfile(dto, utilisateurByEmailOrPhone.profileId || utilisateurByPhone.profileId, profile.info);

          await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id || utilisateurByPhone._id, {
            code,
            codeExpireAt: expirationDate,
            password: await bcrypt.hashSync(password, 10),
          });
          await sendMail({
            to: email,
            subject: '[Pockerapply] - Validation compte',
            body: `
            Bonjour ${utilisateurDO.username || utilisateurDO.nom},
            <br /> <br />
            <span>
              <p>Voici votre code de validation: ${code} , le code expire dans 10 minutes.</p>
            <br />
            <br /> 
            Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
            <br /> <br /> <br />
            Cordialement,
            <br /> <br />
            L'équipe Pockerapply.
          `,
          });
          if (utilisateurDO.phone?.callingCode && utilisateurDO.phone?.phoneNumber) {
            await sendSMS(
              `Bonjour ${utilisateurDO.username}, Voici votre code de validation: ${code} , le code expire dans 10 minutes. L'équipe Pockerapply`,
              `${utilisateurDO.phone?.callingCode}${utilisateurDO.phone?.phoneNumber}`,
            );
          }
          return {
            create: true,
          };
        } else {

          if (utilisateurByEmailOrPhone) {
            throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
          }
          else if (utilisateurByPhone) {
            throw new Exception(HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
          }
          else if (utilisateurByEmailOrPhone && utilisateurByPhone) {

            // throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
          }
        }
      }

      const code = entierAleatoire(1111, 9999).toString();
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 10); // le code expire dans 10 Minutes
      const saved = await utilisateurSM.create(utilisateurDO);
      if (!saved) {
        return {
          create: false,
        };
      }

      const profile = await this.createProfile(dto);
      await utilisateurSM.partialUpdate(saved._id, {
        code,
        codeExpireAt: expirationDate,
        profileId: new ObjectID(profile?.id),
        password: await bcrypt.hashSync(password, 10),
      });
      await sendMail({
        to: email,
        subject: '[Pockerapply] - Validation compte',
        body: `
        Bonjour ${utilisateurDO.username || utilisateurDO.nom},
        <br /> <br />
        <span>
          <p>Voici votre code de validation: ${code} , le code expire dans 10 minutes.</p>
        <br />
        <br /> 
        Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
        <br /> <br /> <br />
        Cordialement,
        <br /> <br />
        L'équipe Pockerapply.
        `,
      });
      if (utilisateurDO.phone?.callingCode && utilisateurDO.phone?.phoneNumber) {
        await sendSMS(
          `Bonjour ${utilisateurDO.username}, Voici votre code de validation: ${code} , le code expire dans 10 minutes. L'équipe Pockerapply`,
          `${utilisateurDO.phone?.callingCode}${utilisateurDO.phone?.phoneNumber}`,
        );
      }
      return {
        create: true,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async socialAuth(dto: InscriptionRequestDTO) {
    try {
      const utilisateurDO = this.factory.toDo(dto);
      const { email, googleId, facebookId, appleId } = dto;
      const utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });
      let user = null;
      if (utilisateurByEmailOrPhone) {
        if (googleId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
            googleId,
          });
          user = value;
        } else if (facebookId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
            facebookId,
          });
          user = value;
        } else if (appleId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, {
            appleId,
          });
          user = value;
        }
        const { accessToken, refreshToken } = await generateTokens(user);

        return {
          accessToken,
          refreshToken,
          deviceToken: '',
          utilisateur: { ...user },
        };
      } else {
        const saved = await utilisateurSM.create(utilisateurDO);
        const profile = await this.createProfile(dto);

        const { value } = await utilisateurSM.partialUpdate(saved._id, {
          profileId: profile?.id,
        });

        const { accessToken, refreshToken } = await generateTokens(saved);

        return {
          id: saved?._id,
          create: true,
          accessToken,
          refreshToken,
          deviceToken: '',
          utilisateur: {
            ...value,
            profileId: profile?.id,
          },
        };
      }
    } catch (error) {
      console.log('socialAuth error', error);
      return null;
    }
  }

  async reSendCode(dto: ResendCodeRequestDTO) {
    try {
      const { email, phone } = dto;
      console.log('====================================');
      console.log(email);
      console.log('====================================');
      let utilisateurByEmailOrPhone;
      if (utilisateurByEmailOrPhone) {
        utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({
          phone: phone
        });
      } else if (email) {
        utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });
      }

      if (!utilisateurByEmailOrPhone) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Utilisateur introuvable');
      }

      if (utilisateurByEmailOrPhone?.actif) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Utilisateur déjà actif');
      }

      const code = entierAleatoire(1111, 9999).toString();
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 10); // le code expire dans 10 Minutes
      const saved = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, { code, codeExpireAt: expirationDate });

      await sendMail({
        to: email,
        subject: '[Pokerapply] - Validation compte',
        body: `
      Bonjour ${utilisateurByEmailOrPhone.username || utilisateurByEmailOrPhone.nom},
      <br /> <br />
      <span>
        <p>Voici votre code de validation: ${code},le code expire dans 10 minutes.</p>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pockerapply.
      `,
      });
      if (utilisateurByEmailOrPhone.phone?.callingCode && utilisateurByEmailOrPhone.phone?.phoneNumber) {
        await sendSMS(
          `Bonjour ${utilisateurByEmailOrPhone.username}, Voici votre code de validation: ${code} , le code expire dans 10 minutes. L'équipe Pockerapply`,
          `${utilisateurByEmailOrPhone.phone?.callingCode}${utilisateurByEmailOrPhone.phone?.phoneNumber}`,
        );
      }
      return saved;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async validationCode(dto: ValidationCodeRequestDTO) {
    try {
      const { email, code, phone } = dto;
      //let utilisateurByEmailOrPhone;
      /**if (phone) {
        utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ phone });
      } else if (email) {**/
      let utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });
      //}
      if (!utilisateurByEmailOrPhone) {
        return {
          validation: false,
          expired: false,
          userNotFound: true
        };
      }
      if (utilisateurByEmailOrPhone?.code == code) {
        if (new Date(utilisateurByEmailOrPhone?.codeExpireAt) >= new Date()) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone?._id, {
            code: '',
            codeExpireAt: null,
            actif: true,
          });

          const { accessToken, refreshToken } = await generateTokens(value);

          return {
            id: value?._id,
            validation: true,
            expired: false,
            userNotFound: false,
            accessToken,
            refreshToken,
            deviceToken: '',
            utilisateur: value,
          };
        } else {
          this.reSendCode({ email, phone })
          return {
            validation: false,
            expired: true,
            userNotFound: false
          };
        }
      } else {
        return {
          validation: false,
          expired: false,
          userNotFound: false
        };
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const inscriptionSA = new InscriptionSA();
