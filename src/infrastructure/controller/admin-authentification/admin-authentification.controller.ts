import { HttpStatus } from '../../../data/constants/http-status';
import passport from '../../../service/middleware/passport';
import { passportStrategies } from '../../../service/middleware/passport/passport-strategies';

class AdminAuthentificationController {
  signIn = async (req, res, next) => {
    passport.authenticate(passportStrategies.admin, { session: false }, (err, data) => {
      if (err && !data) {
        res.locals.statusCode = HttpStatus.BAD_REQUEST;

        next(err);
      } else {
        res.locals.data = data;
        next();
      }
    })(req, res, next);
  };
}

export const adminAuthentificationController = new AdminAuthentificationController();
