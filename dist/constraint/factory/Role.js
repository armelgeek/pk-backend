"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleFactory = exports.RoleFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Role.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class RoleFactory extends generic_factory_1.GenericFactory {
}
exports.RoleFactory = RoleFactory;
exports.roleFactory = new RoleFactory(schema, schema, responseSchema);
//# sourceMappingURL=Role.js.map