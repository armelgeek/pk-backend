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
    const {
      email,
      phone = '',
      nom = '',
      prenom = '',
      imageUrl = '',
    } = dto;
    const base = await baseinformationSA.create({
      email,
      phone,
      nom,
      prenom,
      imageUrl,
    });
    const info = await complementaryinformationSA.create({
      email,
      phone,
    });
    return await profileSA.create(
      this.profileFactory.toDo({ info: new ObjectID(info?.id), photo: imageUrl, type: 'VIP', base: new ObjectID(base?.id) }),
    );
  }

  async create(dto: InscriptionRequestDTO) {
    try {
      const utilisateurDO = this.factory.toDo(dto);
      const { email, password, phone } = dto;

      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });
      const utilisateurByPhone = await utilisateurSM.findOneNotFail({ phone });

      if (utilisateurByEmail) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
      }

      if (utilisateurByPhone) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
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
        profile: new ObjectID(profile?.id),
        password: await bcrypt.hashSync(password, 10),
      });

      await sendMail({
        to: email,
        subject: '[Pocker Apps] - Validation compte',
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
      L'équipe Pocker Apps.
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
      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });
      let user = null;
      if (utilisateurByEmail) {
        if (googleId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmail._id, {
            googleId,
          });
          user = value;
        } else if (facebookId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmail._id, {
            facebookId,
          });
          user = value;
        } else if (appleId) {
          const { value } = await utilisateurSM.partialUpdate(utilisateurByEmail._id, {
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
          profile: profile?.id,
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
            profile: profile?.id,
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
      // const id = uuidV4();
      const { email } = dto;

      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });

      if (!utilisateurByEmail) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
      }

      if (utilisateurByEmail?.actif) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Utilisateur déjà actif');
      }

      const code = entierAleatoire(1111, 9999).toString();
      const saved = await utilisateurSM.partialUpdate(utilisateurByEmail._id, { code });

      await sendMail({
        to: email,
        subject: '[Pocker Apps] - Validation compte',
        body: `
      Bonjour ${utilisateurByEmail.username || utilisateurByEmail.nom},
      <br /> <br />
      <span>
        <p>Voici votre code de validation: ${code}</p>
      <br />
      <br /> 
      Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pocker Apps.
      `,
      });

      return saved;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async validationCode(dto: ValidationCodeRequestDTO) {
    try {
      const { email, code } = dto;
      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });
      if (utilisateurByEmail?.code === code) {
        const { value } = await utilisateurSM.partialUpdate(utilisateurByEmail?._id, {
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
