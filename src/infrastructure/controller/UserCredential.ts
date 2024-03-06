import { GenericController } from '../../common/infrastructure/generic.controller';
import { UserCredentialDO } from '../../data/do/UserCredential';
// @ts-ignore
import { UserCredentialRequestDTO } from '../../data/dto/UserCredential/request';
// @ts-ignore
import { UserCredentialResponseDTO } from '../../data/dto/UserCredential/response';
import { usercredentialSA, UserCredentialSA } from '../../service/applicatif/UserCredential';

class UserCredentialController extends GenericController<
  UserCredentialDO,
  UserCredentialRequestDTO,
  UserCredentialResponseDTO,
  UserCredentialSA
> {
  async getUserCredsByUserId(req, res, next) {
    try {
      const data = await usercredentialSA.findOneNotFail({ userId: req.params.userId });
      res.locals.data = data;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const usercredentialController = new UserCredentialController(usercredentialSA);

