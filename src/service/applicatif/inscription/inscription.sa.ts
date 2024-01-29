// import { v4 as uuidV4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

import { inscriptionFactory } from '../../../constraint/factory/inscription/inscription.factory';
import { HttpStatus } from '../../../data/constants/http-status';
// @ts-ignore
import { InscriptionRequestDTO } from '../../../data/dto/inscription/inscription-request.dto';
import { ResendCodeRequestDTO, ValidationCodeRequestDTO } from '../../../data/dto/inscription/re-send-code-request.dto';
import { utilisateurSM } from '../../metier/utilisateur/utilisateur.sm';
import { Exception } from '../../middleware/exception-handler';
import { sendMail } from '../../middleware/nodemailer';

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

      const saved = await utilisateurSM.create(Object.assign(utilisateurDO, { password: await bcrypt.hashSync(password, 10), code }));

      console.log({ saved });
      if(!saved) {
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

      const users = await utilisateurSM.findAll({ email: "pocker" }, "");
      console.log('====================================');
      console.log({ users });
      console.log('====================================');
      const utilisateurByEmail = await utilisateurSM.findOneNotFail({ email });
      console.log('====================================');
      console.log({ utilisateurByEmail });
      console.log('====================================');
      if (utilisateurByEmail?.code === code) {
        await utilisateurSM.partialUpdate(utilisateurByEmail?._id, { code: "", actif: true });
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
