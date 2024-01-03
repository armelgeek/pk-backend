import { GenericFactory } from '../../../common/constraint/factory/generic.factory';

const schema = {
  societeId: 'name_id',
  partenaireId: 'partner_id',
  uid: 'uid',
  accessToken: 'access_token',
  nom: 'name',
  login: 'login',
};

class andoomAuthentificationFactory extends GenericFactory<object, object, object> {}

export const odooAuthentificationFactory = new andoomAuthentificationFactory(schema, schema, schema);
