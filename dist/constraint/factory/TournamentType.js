"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamenttypeFactory = exports.TournamentTypeFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.TournamentType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class TournamentTypeFactory extends generic_factory_1.GenericFactory {
}
exports.TournamentTypeFactory = TournamentTypeFactory;
exports.tournamenttypeFactory = new TournamentTypeFactory(schema, schema, responseSchema);
//# sourceMappingURL=TournamentType.js.map