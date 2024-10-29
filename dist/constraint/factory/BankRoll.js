"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankrollFactory = exports.BankRollFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.BankRoll.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class BankRollFactory extends generic_factory_1.GenericFactory {
}
exports.BankRollFactory = BankRollFactory;
exports.bankrollFactory = new BankRollFactory(schema, schema, responseSchema);
//# sourceMappingURL=BankRoll.js.map