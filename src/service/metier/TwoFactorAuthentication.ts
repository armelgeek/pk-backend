import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { TwoFactorAuthenticationDO } from '../../data/do/TwoFactorAuthentication';
import { TwoFactorAuthenticationRepository } from '../../repository/TwoFactorAuthentication';

export class TwoFactorAuthenticationSM extends GenericSM<TwoFactorAuthenticationDO, string, TwoFactorAuthenticationRepository> {
}

export const twofactorauthenticationSM = new TwoFactorAuthenticationSM(getCustomRepository(TwoFactorAuthenticationRepository));

