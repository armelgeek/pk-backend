"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticedFactory = exports.NoticedFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Noticed.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class NoticedFactory extends generic_factory_1.GenericFactory {
}
exports.NoticedFactory = NoticedFactory;
exports.noticedFactory = new NoticedFactory(schema, schema, responseSchema);
//# sourceMappingURL=Noticed.js.map