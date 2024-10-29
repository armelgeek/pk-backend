"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gametypeFactory = exports.GameTypeFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.GameType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class GameTypeFactory extends generic_factory_1.GenericFactory {
}
exports.GameTypeFactory = GameTypeFactory;
exports.gametypeFactory = new GameTypeFactory(schema, schema, responseSchema);
//# sourceMappingURL=GameType.js.map