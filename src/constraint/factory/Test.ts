import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
// import { dataTDO } from '../../data';
import { TestDO } from '../../data/do/Test';
// @ts-ignore
import { TestRequestDTO } from '../../data/dto/Test/request';
// @ts-ignore
import { TestResponseDTO } from '../../data/dto/Test/response';

const commonSchema = {
  // ...dataTDO.Test.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class TestFactory extends GenericFactory<
  TestDO,
  TestRequestDTO,
  TestResponseDTO
> {}

export const testFactory = new TestFactory(schema, schema, responseSchema);

