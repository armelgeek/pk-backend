import { GenericController } from '../../common/infrastructure/generic.controller';
import { RegistrationDO } from '../../data/do/Registration';
// @ts-ignore
import { RegistrationRequestDTO } from '../../data/dto/Registration/request';
// @ts-ignore
import { RegistrationResponseDTO } from '../../data/dto/Registration/response';
import { registrationSA, RegistrationSA } from '../../service/applicatif/Registration';

class RegistrationController extends GenericController<
  RegistrationDO,
  RegistrationRequestDTO,
  RegistrationResponseDTO,
  RegistrationSA
> {}

export const registrationController = new RegistrationController(registrationSA);

