import { GenericSA } from '../../common/service/generic.sa';
import {
    donationFactory,
  DonationFactory,
} from '../../constraint/factory/Donation';
import { DonationDO } from '../../data/do/Donation';
// @ts-ignore
import { DonationRequestDTO } from '../../data/dto/Donation/request';
// @ts-ignore
import { DonationResponseDTO } from '../../data/dto/Donation/response';
import { donationSM, DonationSM } from '../metier/Donation';

export class DonationSA extends GenericSA<
  DonationDO,
  DonationRequestDTO,
  DonationResponseDTO,
  DonationSM,
  DonationFactory
> {
}

export const donationSA = new DonationSA(donationSM, donationFactory, 'Donation');

