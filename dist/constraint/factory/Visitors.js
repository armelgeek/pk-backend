"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorsFactory = exports.VisitorsFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Visitors.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class VisitorsFactory extends generic_factory_1.GenericFactory {
}
exports.VisitorsFactory = VisitorsFactory;
exports.visitorsFactory = new VisitorsFactory(schema, schema, responseSchema);
//# sourceMappingURL=Visitors.js.map