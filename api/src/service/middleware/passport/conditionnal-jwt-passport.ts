import passport from '.';
import { HttpStatus } from '../../../data/constants/http-status';
import { Exception } from '../exception-handler';
import { passportStrategies } from './passport-strategies';

import { dataTDO } from '../../../data';

const errorMessage = {
  TokenExpiredError: 'Token expiré',
  Role: "Contacter l'administrateur",
};

export const conditionnalJwtPassport = (isSecured: boolean, name?: string) => (req, res, next) => {
  const operations = dataTDO[name]?.operations || [];
  const { baseUrl, method } = req;
  const operation = operations?.find((item) =>
    baseUrl === `/api/${item?.route}` && method?.toLowerCase() === item?.method?.toLowerCase());
  const role = Number(operation?.role || 0)
  role > 0
    ? passport.authenticate(passportStrategies.jwt, { session: false }, (err, user, info) => {
      if (err) {
        res.locals.statusCode = HttpStatus.UNAUTHORIZED;
        return next(err);
      }

      if (!user && info) {
        const { message, name } = info;

        return next(new Exception(HttpStatus.UNAUTHORIZED, errorMessage[name] || message));
      }
      const userRole = Number(user?.role);
      if (role <= userRole) {
        console.log({ user, role: user?.role });
        req.user = user;

        return next();
      }

      return next(new Exception(HttpStatus.UNAUTHORIZED, errorMessage.Role));
    })(req, res, next)
    : next();
}
