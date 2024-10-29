"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notevalueFactory = exports.NoteValueFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.NoteValue.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class NoteValueFactory extends generic_factory_1.GenericFactory {
}
exports.NoteValueFactory = NoteValueFactory;
exports.notevalueFactory = new NoteValueFactory(schema, schema, responseSchema);
//# sourceMappingURL=NoteValue.js.map