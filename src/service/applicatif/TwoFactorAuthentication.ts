import { GenericSA } from '../../common/service/generic.sa';
import {
    twofactorauthenticationFactory,
  TwoFactorAuthenticationFactory,
} from '../../constraint/factory/TwoFactorAuthentication';
import { TwoFactorAuthenticationDO } from '../../data/do/TwoFactorAuthentication';
// @ts-ignore
import { TwoFactorAuthenticationRequestDTO } from '../../data/dto/TwoFactorAuthentication/request';
// @ts-ignore
import { TwoFactorAuthenticationResponseDTO } from '../../data/dto/TwoFactorAuthentication/response';
import { twofactorauthenticationSM, TwoFactorAuthenticationSM } from '../metier/TwoFactorAuthentication';

export class TwoFactorAuthenticationSA extends GenericSA<
  TwoFactorAuthenticationDO,
  TwoFactorAuthenticationRequestDTO,
  TwoFactorAuthenticationResponseDTO,
  TwoFactorAuthenticationSM,
  TwoFactorAuthenticationFactory
> {
}

export const twofactorauthenticationSA = new TwoFactorAuthenticationSA(twofactorauthenticationSM, twofactorauthenticationFactory, 'TwoFactorAuthentication');

