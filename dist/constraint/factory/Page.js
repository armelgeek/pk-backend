"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageFactory = exports.PageFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Page.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PageFactory extends generic_factory_1.GenericFactory {
}
exports.PageFactory = PageFactory;
exports.pageFactory = new PageFactory(schema, schema, responseSchema);
//# sourceMappingURL=Page.js.map