"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharingnoteFactory = exports.SharingNoteFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.SharingNote.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SharingNoteFactory extends generic_factory_1.GenericFactory {
}
exports.SharingNoteFactory = SharingNoteFactory;
exports.sharingnoteFactory = new SharingNoteFactory(schema, schema, responseSchema);
//# sourceMappingURL=SharingNote.js.map