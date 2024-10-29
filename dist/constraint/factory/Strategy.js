"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategyFactory = exports.StrategyFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Strategy.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class StrategyFactory extends generic_factory_1.GenericFactory {
}
exports.StrategyFactory = StrategyFactory;
exports.strategyFactory = new StrategyFactory(schema, schema, responseSchema);
//# sourceMappingURL=Strategy.js.map