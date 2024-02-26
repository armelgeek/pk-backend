import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SponsorDO } from '../../data/do/Sponsor';
// @ts-ignore
import { SponsorRequestDTO } from '../../data/dto/Sponsor/request';
// @ts-ignore
import { SponsorResponseDTO } from '../../data/dto/Sponsor/response';

const commonSchema = {
  ...dataTDO.Sponsor.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class SponsorFactory extends GenericFactory<
  SponsorDO,
  SponsorRequestDTO,
  SponsorResponseDTO
> {}

export const sponsorFactory = new SponsorFactory(schema, schema, responseSchema);

