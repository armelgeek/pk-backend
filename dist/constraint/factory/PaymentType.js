"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymenttypeFactory = exports.PaymentTypeFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.PaymentType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PaymentTypeFactory extends generic_factory_1.GenericFactory {
}
exports.PaymentTypeFactory = PaymentTypeFactory;
exports.paymenttypeFactory = new PaymentTypeFactory(schema, schema, responseSchema);
//# sourceMappingURL=PaymentType.js.map