import { exceptionMessage } from '../../../data/constants/exception-message';
import { HttpStatus } from '../../../data/constants/http-status';
import { inscriptionSA } from '../../../service/applicatif/inscription/inscription.sa';
import { Exception } from '../../../service/middleware/exception-handler';

export class InscriptionController {
  private serviceSA = inscriptionSA;

  signup = async (req, res, next) => {
    try {
      const { body, files } = req;
      console.log({ body });
      const utilisateur = await this.serviceSA.create(body);

      console.log({ utilisateur });

      res.locals.data = utilisateur;
      res.locals.statusCode = HttpStatus.CREATED;

      next();

    } catch (error) {
      next(error);
    }
  };

  reSendCode = async (req, res, next) => {
    try {
      const { body } = req;
      const utilisateur = await this.serviceSA.reSendCode(body);

      console.log({ utilisateur, body });

      res.locals.data = utilisateur;
      res.locals.statusCode = HttpStatus.CREATED;

      next();

    } catch (error) {
      next(error);
    }
  };

  validationCode = async (req, res, next) => {
    try {
      const { body } = req;
      const utilisateur = await this.serviceSA.validationCode(body);

      console.log({ utilisateur, body });

      res.locals.data = utilisateur;
      res.locals.statusCode = HttpStatus.OK;

      next();

    } catch (error) {
      next(error);
    }
  };
}

export const inscriptionController = new InscriptionController();
