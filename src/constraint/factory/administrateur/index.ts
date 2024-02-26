import { GenericFactory } from '../../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../../common/service/date.service';
import { AdministrateurDO } from '../../../data/do/administrateur';
// @ts-ignore
import { AdministrateurRequestDTO } from '../../../data/dto/Administrateur/request';
// @ts-ignore
import { AdministrateurResponseDTO } from '../../../data/dto/Administrateur/response';

const commonSchema = {
  nom: 'nom',
  prenom: 'prenom',
  email: 'email',
  adresseAdmin: 'adresseAdmin',
  telAdmin: 'telAdmin',
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class AdministrateurFactory extends GenericFactory<
  AdministrateurDO,
  AdministrateurRequestDTO,
  AdministrateurResponseDTO
> {}

export const administrateurFactory = new AdministrateurFactory(schema, schema, responseSchema);
