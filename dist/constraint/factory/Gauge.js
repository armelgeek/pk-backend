"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gaugeFactory = exports.GaugeFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Gauge.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class GaugeFactory extends generic_factory_1.GenericFactory {
}
exports.GaugeFactory = GaugeFactory;
exports.gaugeFactory = new GaugeFactory(schema, schema, responseSchema);
//# sourceMappingURL=Gauge.js.map