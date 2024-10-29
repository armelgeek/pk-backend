"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionFactory = exports.SessionFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Session.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SessionFactory extends generic_factory_1.GenericFactory {
}
exports.SessionFactory = SessionFactory;
exports.sessionFactory = new SessionFactory(schema, schema, responseSchema);
//# sourceMappingURL=Session.js.map