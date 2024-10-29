"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelFactory = exports.LevelFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Level.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class LevelFactory extends generic_factory_1.GenericFactory {
}
exports.LevelFactory = LevelFactory;
exports.levelFactory = new LevelFactory(schema, schema, responseSchema);
//# sourceMappingURL=Level.js.map