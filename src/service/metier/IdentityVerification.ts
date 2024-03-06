import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { IdentityVerificationDO } from '../../data/do/IdentityVerification';
import { IdentityVerificationRepository } from '../../repository/IdentityVerification';

export class IdentityVerificationSM extends GenericSM<IdentityVerificationDO, string, IdentityVerificationRepository> {
}

export const identityverificationSM = new IdentityVerificationSM(getCustomRepository(IdentityVerificationRepository));

