"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageadditionalFactory = exports.PageAdditionalFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.PageAdditional.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PageAdditionalFactory extends generic_factory_1.GenericFactory {
}
exports.PageAdditionalFactory = PageAdditionalFactory;
exports.pageadditionalFactory = new PageAdditionalFactory(schema, schema, responseSchema);
//# sourceMappingURL=PageAdditional.js.map