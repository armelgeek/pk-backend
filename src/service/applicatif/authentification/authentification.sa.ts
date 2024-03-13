/* eslint-disable class-methods-use-this */
import * as bcrypt from 'bcryptjs';
import { ObjectID } from 'typeorm';
import { HttpStatus } from '../../../data/constants/http-status';

import { utilisateurSM } from '../../metier/utilisateur/utilisateur.sm';
import { Exception } from '../../middleware/exception-handler';
import { sendMail } from '../../middleware/nodemailer';
import { generateResetToken } from '../../middleware/passport/passport-local';
import { utilisateurSA } from '../utilisateur/utilisateur.sa';
import { entierAleatoire } from '../inscription/inscription.sa';
import { sendSMS } from '../../middleware/sms';
import { PhoneRequestDTO } from '../../../data/dto/Phone/request';

export class AuthentificationSA {
  findByEmail(email: string): Promise<any> {
    return utilisateurSM.findOne({ email, actif: true });
  }

  findByEmailUsers(email: string): Promise<any> {
    return utilisateurSM.findOne({ email });
  }

  findById(id: string) {
    return utilisateurSM.findById(id);
  }

  validatePassword(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  async passwordResetRequestBo(email: string, boHost: string) {
    try {
      const found = await utilisateurSA.findOneNotFail({ email });

      if (!found) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email non trouvé dans la base de données');
      }

      const { nomPrenom } = found;
      const resetToken = generateResetToken(found);
      const link = `${boHost}/reset-password?resetToken=${resetToken}`;

      await sendMail({
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
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async passwordResetRequest({ email, phone }: { email?: string; phone?: PhoneRequestDTO }, boHost: string) {
    try {
      let found;
      if (email) {
        found = await utilisateurSA.findOneNotFail({ email });
      } else {
        found = await utilisateurSA.findOneNotFail({ phone });
      }

      if (!found) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Email non trouvé dans la base de données');
      }

      const code = entierAleatoire(1111, 9999).toString();
      await utilisateurSM.partialUpdate(found.id, { code });

      if (email) {
        await sendMail({
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
      } else if (found && found.phone?.callingCode && found.phone?.phoneNumber) {
        await sendSMS(
          `Bonjour ${found.username}, Voici votre code de rénitialisation: ${code}. L'équipe Pockerapply`,
          `${found.phone?.callingCode}${found.phone?.phoneNumber}`,
        );
      }

      return true;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async resetPassword(id: ObjectID, password: string) {
    return await utilisateurSA.resetPassword(id, password);
  }
}

export const authentificationSA = new AuthentificationSA();
