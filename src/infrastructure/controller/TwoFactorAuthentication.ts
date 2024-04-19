import { GenericController } from '../../common/infrastructure/generic.controller';
import { TwoFactorAuthenticationDO } from '../../data/do/TwoFactorAuthentication';
// @ts-ignore
import { TwoFactorAuthenticationRequestDTO } from '../../data/dto/TwoFactorAuthentication/request';
// @ts-ignore
import { TwoFactorAuthenticationResponseDTO } from '../../data/dto/TwoFactorAuthentication/response';
import { twofactorauthenticationSA, TwoFactorAuthenticationSA } from '../../service/applicatif/TwoFactorAuthentication';

class TwoFactorAuthenticationController extends GenericController<
  TwoFactorAuthenticationDO,
  TwoFactorAuthenticationRequestDTO,
  TwoFactorAuthenticationResponseDTO,
  TwoFactorAuthenticationSA
> {}

export const twofactorauthenticationController = new TwoFactorAuthenticationController(twofactorauthenticationSA);

