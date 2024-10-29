"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionFactory = exports.InscriptionFactory = void 0;
const generic_factory_1 = require("../../../common/constraint/factory/generic.factory");
const data_1 = require("../../../data");
const commonSchema = {
    ...data_1.dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema, username: 'username', verified: false };
// @ts-ignore
const { password, ...withOutPassword } = schema;
const responseSchema = { id: '_id', ...withOutPassword };
class InscriptionFactory extends generic_factory_1.GenericFactory {
}
exports.InscriptionFactory = InscriptionFactory;
exports.inscriptionFactory = new InscriptionFactory(schema, schema, responseSchema);
//# sourceMappingURL=inscription.factory.js.map