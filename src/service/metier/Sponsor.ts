import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SponsorDO } from '../../data/do/Sponsor';
import { SponsorRepository } from '../../repository/Sponsor';

export class SponsorSM extends GenericSM<SponsorDO, string, SponsorRepository> {
}

export const sponsorSM = new SponsorSM(getCustomRepository(SponsorRepository));

