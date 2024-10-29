"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationFactory = exports.PublicationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Publication.attributes.reduce((acc, { key }) => {
        // const attribute = removeId(key);
        return { ...acc, [key]: key };
    }, {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PublicationFactory extends generic_factory_1.GenericFactory {
}
exports.PublicationFactory = PublicationFactory;
exports.publicationFactory = new PublicationFactory(schema, schema, responseSchema);
//# sourceMappingURL=Publication.js.map