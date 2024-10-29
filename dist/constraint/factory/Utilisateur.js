"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurFactory = exports.UtilisateurFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class UtilisateurFactory extends generic_factory_1.GenericFactory {
}
exports.UtilisateurFactory = UtilisateurFactory;
exports.utilisateurFactory = new UtilisateurFactory(schema, schema, responseSchema);
//# sourceMappingURL=Utilisateur.js.map