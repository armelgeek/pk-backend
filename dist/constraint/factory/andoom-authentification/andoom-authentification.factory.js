"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.odooAuthentificationFactory = void 0;
const generic_factory_1 = require("../../../common/constraint/factory/generic.factory");
const schema = {
    societeId: 'name_id',
    partenaireId: 'partner_id',
    uid: 'uid',
    accessToken: 'access_token',
    nom: 'name',
    login: 'login',
};
class andoomAuthentificationFactory extends generic_factory_1.GenericFactory {
}
exports.odooAuthentificationFactory = new andoomAuthentificationFactory(schema, schema, schema);
//# sourceMappingURL=andoom-authentification.factory.js.map