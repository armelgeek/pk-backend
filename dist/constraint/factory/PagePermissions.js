"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepermissionsFactory = exports.PagePermissionsFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.PagePermissions.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PagePermissionsFactory extends generic_factory_1.GenericFactory {
}
exports.PagePermissionsFactory = PagePermissionsFactory;
exports.pagepermissionsFactory = new PagePermissionsFactory(schema, schema, responseSchema);
//# sourceMappingURL=PagePermissions.js.map