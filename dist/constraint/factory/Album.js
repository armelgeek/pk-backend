"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumFactory = exports.AlbumFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Album.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class AlbumFactory extends generic_factory_1.GenericFactory {
}
exports.AlbumFactory = AlbumFactory;
exports.albumFactory = new AlbumFactory(schema, schema, responseSchema);
//# sourceMappingURL=Album.js.map