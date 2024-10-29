"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrateurFactory = exports.AdministrateurFactory = void 0;
const generic_factory_1 = require("../../../common/constraint/factory/generic.factory");
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
};
class AdministrateurFactory extends generic_factory_1.GenericFactory {
}
exports.AdministrateurFactory = AdministrateurFactory;
exports.administrateurFactory = new AdministrateurFactory(schema, schema, responseSchema);
//# sourceMappingURL=index.js.map