import { GenericSA } from '../../common/service/generic.sa';
import {
    registrationFactory,
  RegistrationFactory,
} from '../../constraint/factory/Registration';
import { RegistrationDO } from '../../data/do/Registration';
// @ts-ignore
import { RegistrationRequestDTO } from '../../data/dto/Registration/request';
// @ts-ignore
import { RegistrationResponseDTO } from '../../data/dto/Registration/response';
import { registrationSM, RegistrationSM } from '../metier/Registration';

export class RegistrationSA extends GenericSA<
  RegistrationDO,
  RegistrationRequestDTO,
  RegistrationResponseDTO,
  RegistrationSM,
  RegistrationFactory
> {
}

export const registrationSA = new RegistrationSA(registrationSM, registrationFactory, 'Registration');

