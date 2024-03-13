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

  async create(dto: InscriptionRequestDTO) {
    try {
      const utilisateurDO = this.factory.toDo(dto);
      const { email, password, phone } = dto;

      const utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });
      if (phone?.phoneNumber) {
        const utilisateurByPhone = await utilisateurSM.findOneNotFail({
          phone: phone
        });

        if (utilisateurByPhone) {
          throw new Exception(HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
        }
      }

      if (utilisateurByEmailOrPhone) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
      }

      const code = entierAleatoire(1111, 9999).toString();

      const saved = await utilisateurSM.create(utilisateurDO);

      if (!saved) {
        return {
          create: false,
        };
      }

      const profile = await this.createProfile(dto);
      await utilisateurSM.partialUpdate(saved._id, {
        code,
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
        <p>Voici votre code de validation: ${code}</p>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pockerapply.
      `,
      });

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
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
      }

      if (utilisateurByEmailOrPhone?.actif) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Utilisateur déjà actif');
      }

      const code = entierAleatoire(1111, 9999).toString();
      const saved = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone._id, { code });

      await sendMail({
        to: email,
        subject: '[Pokerapply] - Validation compte',
        body: `
      Bonjour ${utilisateurByEmailOrPhone.username || utilisateurByEmailOrPhone.nom},
      <br /> <br />
      <span>
        <p>Voici votre code de validation: ${code}</p>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pockerapply.
      `,
      });

      return saved;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async validationCode(dto: ValidationCodeRequestDTO) {
    try {
      const { email, code, phone } = dto;
      let utilisateurByEmailOrPhone;
      if (phone) {
        utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ phone });
      } else if(email) {
        utilisateurByEmailOrPhone = await utilisateurSM.findOneNotFail({ email });
      }
      
      if (utilisateurByEmailOrPhone?.code === code) {
        const { value } = await utilisateurSM.partialUpdate(utilisateurByEmailOrPhone?._id, {
          code: '',
          actif: true,
        });

        const { accessToken, refreshToken } = await generateTokens(value);

        return {
          id: value?._id,
          validation: true,
          accessToken,
          refreshToken,
          deviceToken: '',
          utilisateur: value,
        };
      }
      return {
        validation: false,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const inscriptionSA = new InscriptionSA();
