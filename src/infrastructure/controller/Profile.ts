import { GenericController } from '../../common/infrastructure/generic.controller';
import { ProfileDO } from '../../data/do/Profile';
// @ts-ignore
import { ProfileRequestDTO } from '../../data/dto/Profile/request';
// @ts-ignore
import { ProfileResponseDTO } from '../../data/dto/Profile/response';
import { profileSA, ProfileSA } from '../../service/applicatif/Profile';

class ProfileController extends GenericController<
  ProfileDO,
  ProfileRequestDTO,
  ProfileResponseDTO,
  ProfileSA
> {
  public serviceSA: ProfileSA;

  profileInfo = async (req, res, next) => {
    try {
      const { params, body } = req;
      console.log({ body });
      res.locals.data = await this.serviceSA.partialUpdate(params.id, body);

      next();
    } catch (error) {
      next(error);
    }
  };
}

export const profileController = new ProfileController(profileSA);

