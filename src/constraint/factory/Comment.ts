import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CommentDO } from '../../data/do/Comment';
// @ts-ignore
import { CommentRequestDTO } from '../../data/dto/Comment/request';
// @ts-ignore
import { CommentResponseDTO } from '../../data/dto/Comment/response';

const commonSchema = {
  ...dataTDO.Comment.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CommentFactory extends GenericFactory<
  CommentDO,
  CommentRequestDTO,
  CommentResponseDTO
> {}

export const commentFactory = new CommentFactory(schema, schema, responseSchema);

