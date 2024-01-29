import { GenericFactory } from '../../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../../common/service/date.service';
import { dataTDO } from '../../../data';
import { UtilisateurDO } from '../../../data/do/Utilisateur';
// @ts-ignore
import { InscriptionRequestDTO } from '../../../data/dto/inscription/inscription-request.dto';
// @ts-ignore
import { InscriptionResponseDTO } from '../../../data/dto/inscription/inscription-response.dto';

const commonSchema = {
  ...dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};

const schema = { ...commonSchema, username: 'username' };
// @ts-ignore
const { password, ...withOutPassword } = schema;
const responseSchema = { id: '_id', ...withOutPassword };

export class InscriptionFactory extends GenericFactory<
  UtilisateurDO,
  InscriptionRequestDTO,
  InscriptionResponseDTO
> {}

export const inscriptionFactory = new InscriptionFactory(schema, schema, responseSchema);
