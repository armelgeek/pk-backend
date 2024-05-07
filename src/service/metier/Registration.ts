import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { RegistrationDO } from '../../data/do/Registration';
import { RegistrationRepository } from '../../repository/Registration';

export class RegistrationSM extends GenericSM<RegistrationDO, string, RegistrationRepository> {
}

export const registrationSM = new RegistrationSM(getCustomRepository(RegistrationRepository));

