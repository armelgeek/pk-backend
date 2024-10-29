"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteFactory = exports.NoteFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Note.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class NoteFactory extends generic_factory_1.GenericFactory {
}
exports.NoteFactory = NoteFactory;
exports.noteFactory = new NoteFactory(schema, schema, responseSchema);
//# sourceMappingURL=Note.js.map