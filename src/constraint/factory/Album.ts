import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { AlbumDO } from '../../data/do/Album';
// @ts-ignore
import { AlbumRequestDTO } from '../../data/dto/Album/request';
// @ts-ignore
import { AlbumResponseDTO } from '../../data/dto/Album/response';

const commonSchema = {
  ...dataTDO.Album.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class AlbumFactory extends GenericFactory<
  AlbumDO,
  AlbumRequestDTO,
  AlbumResponseDTO
> {}

export const albumFactory = new AlbumFactory(schema, schema, responseSchema);

