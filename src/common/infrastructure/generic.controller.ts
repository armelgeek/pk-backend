import {MongoRepository, ObjectID as ObjectIDType} from "typeorm";
import {ObjectID} from "mongodb";
import {AES, enc, lib, mode, pad} from "crypto-js";
import {HttpStatus} from "../../data/constants/http-status";
import {GenericFactory} from "../constraint/factory/generic.factory";
import {GenericSA} from "../service/generic.sa";
import {GenericSM} from "../service/generic.sm";
import {sendMail as sendMailFunction} from "../../service/middleware/nodemailer";
import {sendNotification} from "../../service/middleware/firebase-cloud-messaging";
import {UtilisateurSA, utilisateurSA} from "../../service/applicatif/Utilisateur";
import {DeviceSA, deviceSA} from "../../service/applicatif/Device";
import {NotificationSA, notificationSA} from "../../service/applicatif/Notification";
import {PageSA, pageSA} from "../../service/applicatif/Page";
import {ProfileSA, profileSA} from "../../service/applicatif/Profile";
import {PublicationSA, publicationSA} from "../../service/applicatif/Publication";
import { noteSA,NoteSA } from "../../service/applicatif/Note";

function encrypt(plainText:string, secret) {
  const key = enc.Utf8.parse(secret);
  const iv = lib.WordArray.create(key.words.slice(0, 4));

  const cipherText = AES.encrypt(plainText, key, {
    iv,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  });
  return cipherText.toString();
}
function decrypt(cipherText, secret, iv) {
  let iv1 = enc.Base64.parse(iv);

  const key = enc.Utf8.parse(secret);
  const cipherBytes = enc.Base64.parse(cipherText);

  const decrypted = AES.decrypt({ciphertext: cipherBytes}, key, {
    iv: iv1,
    mode: mode.CBC,
    padding: pad.Pkcs7
  });

  return decrypted.toString(enc.Utf8);
}

function generateHashedLink(baseURL,pageId, secretKey, expirationMinutes) {

  const expirationDate = new Date(Date.now() + expirationMinutes * 60000).toISOString();

  const dataToHash = `${pageId}:${expirationDate}`;

  const hash = encrypt(dataToHash, secretKey);
  const encodedHash = encodeURIComponent(hash);

  const linkHash =  `${baseURL}?id=${pageId}&exp=${expirationDate}&hash=${encodedHash}`
  return linkHash.replace(/\s+/g, '');
}

export class GenericController<
  TDo,
  TRequestDto,
  TResponseDto,
  TSa extends GenericSA<
    TDo,
    TRequestDto,
    TResponseDto,
    GenericSM<TDo, string | number | ObjectIDType, MongoRepository<TDo>>,
    GenericFactory<TDo, TRequestDto, TResponseDto>
  >
> {
  serviceSA: TSa;
  userSA: UtilisateurSA;
  profileSA: ProfileSA;
  deviceSA: DeviceSA;
  notificationSA: NotificationSA;
  publicationSA: PublicationSA;
  pageSA: PageSA;
  noteSA: NoteSA;

  constructor(serviceSA) {
    this.serviceSA = serviceSA;
    this.userSA = utilisateurSA;
    this.deviceSA = deviceSA;
    this.pageSA = pageSA;
    this.profileSA = profileSA;
    this.notificationSA = notificationSA;
    this.publicationSA = publicationSA;
    this.noteSA = noteSA;
  }

  /**
   * WS managing the creation of an entity
   */
  create = async (req, res, next) => {
    const { body } = req;
    try {
      const created = await this.serviceSA.create(body);

      res.locals.data = created;
      res.locals.statusCode = HttpStatus.CREATED;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the update of an entity
   */
  update = async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updated = await this.serviceSA.update(id, body);

      res.locals.data = updated;
      res.locals.statusCode = HttpStatus.OK;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the update many of an entity
   */
  updateMany = async (req, res, next) => {
    const {
      body: { data, query },
    } = req;
    try {
      const updated = await this.serviceSA.updateMany(query, data);

      res.locals.data = updated;
      res.locals.statusCode = HttpStatus.OK;

      next();
    } catch (error) {
      next(error);
    }
  };

  pushUpdate = async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updated = await this.serviceSA.pushUpdate(id, body);

      res.locals.data = updated;

      next();
    } catch (error) {
      next(error);
    }
  };

  partialUpdate = async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updated = await this.serviceSA.partialUpdate(id, body);

      res.locals.data = updated;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the deletion of an entity
   */
  delete = async (req, res, next) => {
    const {
      params: { id },
    } = req;
    try {
      const response = await this.serviceSA.delete(id);

      res.locals.data = response;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the recovery of an entity by its id
   */
  findById = async (req, res, next) => {
    const {
      params: { id },
    } = req;
    try {
      const found = await this.serviceSA.findById(id);

      res.locals.data = found;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the recovery of an entity by its Attributes
   */
  findByAttributes = async (req, res, next) => {
    const { params } = req;
    try {
      const found = await this.serviceSA.findOneNotFail(params);

      res.locals.data = found;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS returning list of all entitie
   */
  findAll = async (req, res, next) => {
    const {
      query: {
        page = 1,
        rowPerPage = 10,
        light,
        direction,
        sortField,
        order,
        match,
        search,
        lookup,
        geoNear,
        exists,
        no_exists,
        ...queries
      },
    } = req;

    try {
      const dtos = await this.serviceSA.findAll({
        search,
        match,
        sortField,
        direction,
        queries,
        light: JSON.parse(light || 'true'),
        take: rowPerPage * 1,
        skip: (page - 1) * rowPerPage,
        lookup,
        geoNear,
        exists,
        no_exists,
      });

      res.locals.data = dtos;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS returning the document meeting the specified criteria
   */
  findOne = async (req, res, next) => {
    const {
      query: { page, rowPerPage, light, direction, sortField, match, search, ...queries },
    } = req;
    try {
      const found = await this.serviceSA.findOneWithRelation({
        search,
        match,
        queries,
      });

      if (Array.isArray(found) && found.length > 0) {
        res.locals.data = found[0];
      } else {
        res.locals.data = false;
      }

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the count elements of an entity
   */
  count = async (req, res, next) => {
    const { query } = req;
    try {
      const params = await this.serviceSA.count(query);

      res.locals.data = params;
      res.locals.statusCode = HttpStatus.OK;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS returning Sum
   */
  sum = async (req, res, next) => {
    const {
      params: { field },
      query: {
        page = 1,
        rowPerPage = 10,
        light,
        direction,
        sortField,
        order,
        match,
        search,
        ...queries
      },
    } = req;

    try {
      const dtos = await this.serviceSA.sum({
        search,
        match,
        sortField,
        direction,
        queries,
        light: JSON.parse(light || 'true'),
        take: rowPerPage * 1,
        skip: (page - 1) * rowPerPage,
        field,

      });

      res.locals.data = dtos;

      next();
    } catch (error) {
      next(error);
    }
  };
  sendMail = async (req, res, next) => {
    try {
      const { nom, prenom, email, status, comment, profileId } = req.body;
      let tokens = [];

      const currentUser = await this.profileSA.findById(profileId);

      if (currentUser.id) {
        const devices = await this.deviceSA.findAll({ user: currentUser.id });

        if (devices?.items.length) {
          tokens = devices.items.map(({ token }) => token);
        }

      }

      if (status === 1) {
        await sendMailFunction({
          to: email,
          subject: "[PokerApply] - Validation de l'identité",
          body: `
          Bonjour ${nom} ${prenom},
          <br /> <br />
          <span>
            <p>Votre demande de validation d'identité a été acceptée.</p>
            <p>Merci de faire partie de notre communauté.</p>
          </span>
          <br /> <br /> <br />
          Cordialement,
          <br /> <br />
          L'équipe de PokerApply.
        `,
        });
        if (tokens?.length > 0) {
          sendNotification({
            tokens,
            title: "[PokerApply] - Validation de l'identité",
            body:
              "Votre demande de validation d'identité a été acceptée. Merci de faire partie de notre communauté.",
          });
          await notificationSA.create({
            user: currentUser.id,
            title: "[PokerApply] - Refus de validation d'identité",
            message:
              "Votre demande de validation d'identité a été acceptée. Merci de faire partie de notre communauté.",
          });
        }
      } else if (status === 2) {
        await sendMailFunction({
          to: email,
          subject: "[PokerApply] - Refus de validation d'identité",
          body: `
          Bonjour ${nom} ${prenom},
          <br /> <br />
          <span>
            <p>Nous regrettons de vous informer que votre demande de validation d'identité a été refusée.</p>
            <p>Raison : ${comment}</p>
          </span>
          <br /> <br /> <br />
          Cordialement,
          <br /> <br />
          L'équipe PokerApply.
        `,
        });
        if (tokens?.length > 0) {
          await sendNotification({
            tokens,
            title: "[PokerApply] - Refus de validation d'identité",
            body:
              "Nous regrettons de vous informer que votre demande de validation d'identité a été refusée. Raison : ${comment}",
          });
          await notificationSA.create({
            user: currentUser.id,
            title: "[PokerApply] - Refus de validation d'identité",
            message: `Nous regrettons de vous informer que votre demande de validation d'identité a été refusée. Raison : ${comment}`,
          });
        }
      }
      res.locals.data = true;
      res.locals.statusCode = HttpStatus.OK;
      next();
    } catch (error) {
      console.log('error', error);
      next(error);
    }
  };
  hasFollowed = async (req, res, next) => {
    const { params } = req;
    /**
     * const andConditions = [
     *   { age: { $gte: 18 } },
     *   { status: 'active' }
     * ];
     *
     * const orConditions = [
     *   { role: 'admin' },
     *   { role: 'user' }
     * ];
     */
    try {
      const data = await this.serviceSA.findByAttributes(
        [{ follow: new ObjectID(params.profileId) }, { follower: new ObjectID(params.id) }],
        [],
      );
      res.locals.data = data;
      res.locals.statusCode = HttpStatus.OK;
      next();
    } catch (error) {
      console.log('error', error);
      next(error);
    }
  };
  isFriend =  async (req, res, next) => {
    const { params } = req;
    try {
      if(params.id != undefined) {
        res.locals.data = await this.serviceSA.findByAttributes(
          [{ follow: new ObjectID(params.id) }, { follower: new ObjectID(params.profileId) }],
          [],
        );
      }else{
        res.locals.data = await this.serviceSA.findByAttributes(
          [{ follower: new ObjectID(params.profileId) }],
          [],
        );
      }

      res.locals.statusCode = HttpStatus.OK;
      next();
    } catch (error) {
      next(error);
    }
  };

  addMemberToPage = async (req, res, next) => {
    try {
      const {email, pageId }: {
        email: string,
        pageId: string
      } = req.body;
      const currentPage = await this.pageSA.findById(pageId);
    // 7 jours
      const link = generateHashedLink('http://localhost:3000/app/casino-request-verification', pageId,'pokerapply', 10080);
      await sendMailFunction({
        to: email,
        subject: `[PokerApply] - Invitation a devenir membre du Casino '${currentPage.name}' `,
        body: `
          <span>
            <p>Bonjour,</p>
            <p>Nous vous invitons à rejoindre le Casino '${currentPage.name}'. Pour accepter l'invitation, veuillez cliquer sur le lien ci-dessous :</p>
            <p><a href="${link}">${link}</a></p>
          </span>
        `,
      });
      res.locals.data = true;
      res.locals.statusCode = HttpStatus.OK;
      next();
    }catch(error){
      console.log('error', error);
      next(error);
    }
  };
  findRegistration = async (req, res, next) => {
    const params = req.query;
    let data;

    if (params.profileId) {
      data = await this.serviceSA.findByAttributes(
          [{ profileId: params.profileId }],
          []
      );
    } else {
      data = await this.serviceSA.findByAttributes(
          [{ profileId: params.profileId, publicationId: new ObjectID(params.publicationId) }],
          []
      );
    }

    res.locals.data = await Promise.all(
        data.map(async (d: any) => {
          const profile = await this.profileSA.findById(d.profileId);
          d['profile'] = {
            _id: d.profileId,
            ...profile
          };
          const publication = await this.publicationSA.findById(d.publicationId);
          d['publication'] = {
            _id: d.publicationId,
            ...publication
          };
          return d;
        })
    );
    res.locals.statusCode = HttpStatus.OK;
    next();
  };
  getSharedNoteFor = async (req,res, next) => {
    const params = req.query;
    let data = await this.serviceSA.findByAttributes(
        [{ profileId: params.profileId }],
        []
    );
    res.locals.data = await Promise.all(
      data.map(async (d: any) => {
        const profile = await this.profileSA.findById(d.shareId);
        d['sharedBy'] = {
          _id: d.shareId,
          ...profile
        };
        const note = await this.noteSA.findById(d.nodeId);
        d['note'] = {
          _id: d.nodeId,
          ...note
        };
        return d;
      })
    );
    res.locals.statusCode = HttpStatus.OK;
    next();
  }

}
