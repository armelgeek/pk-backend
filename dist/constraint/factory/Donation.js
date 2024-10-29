"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationFactory = exports.DonationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Donation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class DonationFactory extends generic_factory_1.GenericFactory {
}
exports.DonationFactory = DonationFactory;
exports.donationFactory = new DonationFactory(schema, schema, responseSchema);
//# sourceMappingURL=Donation.js.map