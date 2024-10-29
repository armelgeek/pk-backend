"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileFactory = exports.ProfileFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Profile.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ProfileFactory extends generic_factory_1.GenericFactory {
}
exports.ProfileFactory = ProfileFactory;
exports.profileFactory = new ProfileFactory(schema, schema, responseSchema);
//# sourceMappingURL=Profile.js.map