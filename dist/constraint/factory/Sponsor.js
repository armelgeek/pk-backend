"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorFactory = exports.SponsorFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Sponsor.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SponsorFactory extends generic_factory_1.GenericFactory {
}
exports.SponsorFactory = SponsorFactory;
exports.sponsorFactory = new SponsorFactory(schema, schema, responseSchema);
//# sourceMappingURL=Sponsor.js.map