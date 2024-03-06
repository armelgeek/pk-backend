import { GenericController } from '../../common/infrastructure/generic.controller';
import { IdentityVerificationDO } from '../../data/do/IdentityVerification';
// @ts-ignore
import { IdentityVerificationRequestDTO } from '../../data/dto/IdentityVerification/request';
// @ts-ignore
import { IdentityVerificationResponseDTO } from '../../data/dto/IdentityVerification/response';
import { identityverificationSA, IdentityVerificationSA } from '../../service/applicatif/IdentityVerification';

class IdentityVerificationController extends GenericController<
  IdentityVerificationDO,
  IdentityVerificationRequestDTO,
  IdentityVerificationResponseDTO,
  IdentityVerificationSA
> {}

export const identityverificationController = new IdentityVerificationController(identityverificationSA);

