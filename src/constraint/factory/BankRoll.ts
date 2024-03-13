import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { BankRollDO } from '../../data/do/BankRoll';
// @ts-ignore
import { BankRollRequestDTO } from '../../data/dto/BankRoll/request';
// @ts-ignore
import { BankRollResponseDTO } from '../../data/dto/BankRoll/response';

const commonSchema = {
  ...dataTDO.BankRoll.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class BankRollFactory extends GenericFactory<
  BankRollDO,
  BankRollRequestDTO,
  BankRollResponseDTO
> {}

export const bankrollFactory = new BankRollFactory(schema, schema, responseSchema);

