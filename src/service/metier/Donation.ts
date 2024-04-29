import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { DonationDO } from '../../data/do/Donation';
import { DonationRepository } from '../../repository/Donation';

export class DonationSM extends GenericSM<DonationDO, string, DonationRepository> {
}

export const donationSM = new DonationSM(getCustomRepository(DonationRepository));

