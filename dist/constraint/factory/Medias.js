"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasFactory = exports.MediasFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Medias.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class MediasFactory extends generic_factory_1.GenericFactory {
}
exports.MediasFactory = MediasFactory;
exports.mediasFactory = new MediasFactory(schema, schema, responseSchema);
//# sourceMappingURL=Medias.js.map