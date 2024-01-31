// import { v4 as uuidV4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

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

export function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class InscriptionSA {
  private factory = inscriptionFactory;

  async create(dto: InscriptionRequestDTO) {
    try {
      const utilisateurDO = this.factory.toDo({ ...dto });
      const { email, phone, password } = dto;

      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });
      const utilisateurByPhone = await utilisateurSM.findOneNotFail({ phone });

      if (utilisateurByEmail) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email déjà existant');
      }

      if (utilisateurByPhone) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
      }

      const code = entierAleatoire(1111, 9999).toString();

      const saved = await utilisateurSM.create(
        Object.assign(utilisateurDO, { password: await bcrypt.hashSync(password, 10), code }),
      );

      console.log({ saved });
      if (!saved) {
        return {
          create: false,
        };
      }
      await sendMail({
        to: email,
        subject: '[Pocker Apps] - Validation compte',
        body: `
      Bonjour ${utilisateurDO.username},
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

      // const utilisateur = this.factory.toResponseDto(saved);

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
        const { value } = await utilisateurSM.create(utilisateurDO);

        const { accessToken, refreshToken } = await generateTokens(value);

        return {
          id: value?._id,
          create: true,
          accessToken,
          refreshToken,
          deviceToken: '',
          utilisateur: value,
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

      console.log({ saved });
      await sendMail({
        to: email,
        subject: '[Pocker Apps] - Validation compte',
        body: `
      Bonjour ${utilisateurByEmail.username},
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
        await utilisateurSM.partialUpdate(utilisateurByEmail?._id, { code: '', actif: true });
        return {
          id: utilisateurByEmail?._id,
          validation: true,
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
