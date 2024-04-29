import { GenericController } from '../../common/infrastructure/generic.controller';
import { DonationDO } from '../../data/do/Donation';
// @ts-ignore
import { DonationRequestDTO } from '../../data/dto/Donation/request';
// @ts-ignore
import { DonationResponseDTO } from '../../data/dto/Donation/response';
import { donationSA, DonationSA } from '../../service/applicatif/Donation';

class DonationController extends GenericController<
  DonationDO,
  DonationRequestDTO,
  DonationResponseDTO,
  DonationSA
> {}

export const donationController = new DonationController(donationSA);

