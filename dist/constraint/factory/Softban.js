"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softbanFactory = exports.SoftbanFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Softban.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SoftbanFactory extends generic_factory_1.GenericFactory {
}
exports.SoftbanFactory = SoftbanFactory;
exports.softbanFactory = new SoftbanFactory(schema, schema, responseSchema);
//# sourceMappingURL=Softban.js.map