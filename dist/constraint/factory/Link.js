"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkFactory = exports.LinkFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Link.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class LinkFactory extends generic_factory_1.GenericFactory {
}
exports.LinkFactory = LinkFactory;
exports.linkFactory = new LinkFactory(schema, schema, responseSchema);
//# sourceMappingURL=Link.js.map