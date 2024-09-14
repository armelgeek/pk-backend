import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { AssessmentDO } from '../../data/do/Assessment';
// @ts-ignore
import { AssessmentRequestDTO } from '../../data/dto/Assessment/request';
// @ts-ignore
import { AssessmentResponseDTO } from '../../data/dto/Assessment/response';

const commonSchema = {
  ...dataTDO.Assessment.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class AssessmentFactory extends GenericFactory<
  AssessmentDO,
  AssessmentRequestDTO,
  AssessmentResponseDTO
> {}

export const assessmentFactory = new AssessmentFactory(schema, schema, responseSchema);

