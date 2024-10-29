"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubFactory = exports.ClubFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Club.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ClubFactory extends generic_factory_1.GenericFactory {
}
exports.ClubFactory = ClubFactory;
exports.clubFactory = new ClubFactory(schema, schema, responseSchema);
//# sourceMappingURL=Club.js.map