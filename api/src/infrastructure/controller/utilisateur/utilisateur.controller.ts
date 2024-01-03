import {
  utilisateurSA,
  UtilisateurSA,
} from '../../../service/applicatif/utilisateur/utilisateur.sa';

export class UtilisateurController {
  private serviceSA: UtilisateurSA;

  constructor(serviceSA: UtilisateurSA) {
    this.serviceSA = serviceSA;
  }

  editUtilisateur = async (req, res, next) => {
    try {
      const { files, body } = req;
      const { image, cin } = files || {};
      const cinUrls = cin && cin.map(({ filename }) => filename);
      res.locals.data = await this.serviceSA.editUtilisateur({
        ...body,
        ...(image?.[0] ? { imageUrl: image[0].filename } : {}),
        ...(Array.isArray(cinUrls) && cinUrls.length
          ? { cinUrl1: cinUrls[0], cinUrl2: cinUrls[1] }
          : {}),
      });

      next();
    } catch (error) {
      next(error);
    }
  };

  getCins = async (req, res, next) => {
    try {
      const {
        params: { id },
      } = req;

      res.locals.data = await this.serviceSA.getCins(id);

      next();
    } catch (error) {
      next(error);
    }
  };

  editUtilisateurBO = async (req, res, next) => {
    try {
      const { params, body } = req;
      console.log({ body });
      res.locals.data = await this.serviceSA.partialUpdate(params.id, {
        ...body,
        // ...(file ? { imageUrl: file.filename } : {}),
      });

      next();
    } catch (error) {
      next(error);
    }
  };

  changeUtilisateurStatus = async (req, res, next) => {
    try {
      const {
        body: { id, actif },
      } = req;
      await this.serviceSA.changeUtilisateurStatus(id, actif);

      res.locals.data = true;

      next();
    } catch (error) {
      next(error);
    }
  };

  toActiveUtilisateur = async (req, res, next) => {
    try {
      const {
        body: { email, code },
      } = req;
      console.log({ email, code });
      const user = await this.serviceSA.findOneNotFail({ email, code });
      console.log({ user });
      if (user) {
        await this.serviceSA.partialUpdate(user?.id, { actif: true, code: "" });
      }
      res.locals.data = user ? true : false;

      next();
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    const {
      query: { page, rowPerPage, light, direction, sortField, relation, recherche, ...queries },
    } = req;
    try {
      const dtos = await this.serviceSA.findAll({
        search: recherche,
        relation,
        sortField,
        direction,
        queries,
        light: JSON.parse(light || 'true'),
        take: rowPerPage,
        skip: (page - 1) * rowPerPage,
      });

      res.locals.data = dtos;

      next();
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const {
        params: { id },
      } = req;
      res.locals.data = await this.serviceSA.findById(id);

      next();
    } catch (error) {
      next(error);
    }
  };

  sendPush = async (req, res, next) => {
    try {
      const { body } = req;

      res.locals.data = await this.serviceSA.sendPush(body);

      next();
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    const {
      params: { id },
    } = req;
    console.log({ id });
    try {
      const response = await this.serviceSA.delete(id);

      res.locals.data = response;

      next();
    } catch (error) {
      next(error);
    }
  };
}

export const utilisateurController = new UtilisateurController(utilisateurSA);
