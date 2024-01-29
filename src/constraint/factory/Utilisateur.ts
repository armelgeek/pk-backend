import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { UtilisateurDO } from '../../data/do/Utilisateur';
// @ts-ignore
import { UtilisateurRequestDTO } from '../../data/dto/Utilisateur/request';
// @ts-ignore
import { UtilisateurResponseDTO } from '../../data/dto/Utilisateur/response';

const commonSchema = {
  ...dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class UtilisateurFactory extends GenericFactory<
  UtilisateurDO,
  UtilisateurRequestDTO,
  UtilisateurResponseDTO
> {}

export const utilisateurFactory = new UtilisateurFactory(schema, schema, responseSchema);

