import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { DonationDO } from '../../data/do/Donation';
// @ts-ignore
import { DonationRequestDTO } from '../../data/dto/Donation/request';
// @ts-ignore
import { DonationResponseDTO } from '../../data/dto/Donation/response';

const commonSchema = {
  ...dataTDO.Donation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class DonationFactory extends GenericFactory<
  DonationDO,
  DonationRequestDTO,
  DonationResponseDTO
> {}

export const donationFactory = new DonationFactory(schema, schema, responseSchema);

