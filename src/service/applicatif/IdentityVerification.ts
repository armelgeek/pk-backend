import { GenericSA } from '../../common/service/generic.sa';
import {
    identityverificationFactory,
  IdentityVerificationFactory,
} from '../../constraint/factory/IdentityVerification';
import { IdentityVerificationDO } from '../../data/do/IdentityVerification';
// @ts-ignore
import { IdentityVerificationRequestDTO } from '../../data/dto/IdentityVerification/request';
// @ts-ignore
import { IdentityVerificationResponseDTO } from '../../data/dto/IdentityVerification/response';
import { identityverificationSM, IdentityVerificationSM } from '../metier/IdentityVerification';

export class IdentityVerificationSA extends GenericSA<
  IdentityVerificationDO,
  IdentityVerificationRequestDTO,
  IdentityVerificationResponseDTO,
  IdentityVerificationSM,
  IdentityVerificationFactory
> {
}

export const identityverificationSA = new IdentityVerificationSA(identityverificationSM, identityverificationFactory, 'IdentityVerification');

