import { ObjectID } from 'mongodb';
import * as bcrypt from 'bcryptjs';
import { formatToShortFormat } from '../../../common/service/date.service';
import { GenericSA } from '../../../common/service/generic.sa';
import {
  utilisateurFactory,
  UtilisateurFactory,
} from '../../../constraint/factory/utilisateur/utilisateur.factory';
import { HttpStatus } from '../../../data/constants/http-status';
// import { utilisateur } from '../../../data/constants/urls';
import { UtilisateurDO } from '../../../data/do/Utilisateur';
// @ts-ignore
import { UtilisateurEditRequestDTO } from '../../../data/dto/Utilisateur/utilisateur-edit-request.dto';
// @ts-ignore
import { UtilisateurRequestDTO } from '../../../data/dto/utilisateur/request';
// @ts-ignore
import { UtilisateurResponseDTO } from '../../../data/dto/Utilisateur/response';
import { utilisateurBDL } from '../../bdl/utilisateur/utilisateur.bdl';
import { utilisateurSM, UtilisateurSM } from '../../metier/utilisateur/utilisateur.sm';
import { Exception } from '../../middleware/exception-handler';


const sortFieldMapper = {
  nomPrenom: 'nom',
};

export class UtilisateurSA extends GenericSA<
  UtilisateurDO,
  UtilisateurRequestDTO,
  UtilisateurResponseDTO,
  UtilisateurSM,
  UtilisateurFactory
> {
  async editUtilisateur(dto: UtilisateurEditRequestDTO) {
    try {
      return this.partialUpdate(dto.id, dto);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async partialUpdate(_id: ObjectID, partialEntity): Promise<any> {
    try {
      const utilisateurByPhone = await this.serviceSM.findOneNotFail({ phone: partialEntity.phone });
      if (partialEntity.phone && utilisateurByPhone && utilisateurByPhone._id?.toString() !== _id?.toString()) {
        throw new Exception(HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
      }
      const { email, id, password, ...withOutEmail } = partialEntity;
      const result = await this.serviceSM.partialUpdate(new ObjectID(_id), withOutEmail);
      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  updateSocketId(id: ObjectID, socketId: string) {
    return this.serviceSM.update(id, { socketId });
  }

  async changeUtilisateurStatus(utilisateurId: ObjectID, actif) {
    try {
      const result = await this.serviceSM.partialUpdate(utilisateurId, { actif });
      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async resetPassword(utilisateurId: ObjectID, password: string) {
    try {
      const utilisateurDO = await this.serviceSM.partialUpdate(new ObjectID(utilisateurId), { password: await bcrypt.hashSync(password, 10) });
      return this.factory.toResponseDto(utilisateurDO);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findAll(options) {
    try {
      const { take, skip, direction, sortField, relation, search, queries } = options;
      console.log('search ====================================');
      console.log(search);
      console.log('====================================');
      const data = await this.serviceSM.findAll(
        {
          relation,
          search,
          take,
          skip,
          where: queries,
        },
        this.name,
      );

      const items: any = this.factory.toResponseDto(data[0].data);
      const totalCount = data[0]?.metadata[0]?.total;
      return {
        items: items?.map(({ password, ...res }) => res),
        totalCount,
        ...(!Number.isNaN(take) && !Number.isNaN(skip)
          ? { hasNext: take * (skip / take + 1) < totalCount }
          : {}),
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findById(id: string, toDto = true) {
    try {
      const utilisateur = await this.serviceSM.findById(id);

      return toDto ? this.factory.toBODTO(utilisateur) : utilisateur;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getCins(id: string) {
    try {
      const utilisateur = await this.serviceSM.findById(id);

      return this.factory.toCinResponseDTO(utilisateur);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async sendPush(pushDto) {
    try {
      // const { utilisateurIds, tous, titre, message } = pushDto;
      // const { tokens, utilisateurs } = await this.getDeviceTokensFromUtilisateurIds(
      //   utilisateurIds,
      //   tous,
      // );
      // const notifications = utilisateurs.map((utilisateur) => ({ titre, message, utilisateur }));
      // if (tokens.length) {
      //   await sendNotification({ tokens, title: titre, body: message });
      // }

      // await notificationSA.create(notifications);

      return true;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getDeviceTokensFromUtilisateurIds(utilisateurIds: string[], tous: boolean) {
    try {
      // const utilisateurs = tous
      //   ? await this.serviceSM.getAllUtilisateurWithDeviceToken()
      //   : await this.serviceSM.findByIds(utilisateurIds, {
      //       relations: ['deviceTokens'],
      //     });

      // return {
      //   utilisateurs,
      //   // tokens: utilisateurs.reduce(
      //   //   (res, { deviceTokens }) => [...res, ...deviceTokens.map(({ token }: any) => token)],
      //   //   [],
      //   // ),
      // };
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getDateInscription(minDate: string, maxDate: string) {
    try {
      // const data = await this.serviceSM.getDateInscription(minDate, maxDate);

      // return data.map(({ dateCreation }) => formatToShortFormat(dateCreation));
      return "";
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getSocketIdByUtilisateurId(_id: string) {
    try {
      const utilisateur = await this.serviceSM.findOneNotFail({ _id });

      return utilisateur?.socketId;
    } catch (error) {
      return Promise.resolve('');
    }
  }

  async getSocketIdByNotifToken(notifToken: string) {
    try {
      // const utilisateur = await this.serviceSM.getSocketIdByNotifToken(notifToken);

      // return utilisateur?.socketId;
      return "";
    } catch (error) {
      return Promise.resolve('');
    }
  }

  async getSocketIdByTransactionId(transactionId: string) {
    try {
      // const utilisateur = await this.serviceSM.getSocketIdByTransactionId(transactionId);

      // return utilisateur?.socketId;
      return;
    } catch (error) {
      return Promise.resolve('');
    }
  }
}

export const utilisateurSA = new UtilisateurSA(utilisateurSM, utilisateurFactory, 'utilisateur');
