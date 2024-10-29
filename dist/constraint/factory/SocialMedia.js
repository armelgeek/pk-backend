"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialmediaFactory = exports.SocialMediaFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.SocialMedia.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SocialMediaFactory extends generic_factory_1.GenericFactory {
}
exports.SocialMediaFactory = SocialMediaFactory;
exports.socialmediaFactory = new SocialMediaFactory(schema, schema, responseSchema);
//# sourceMappingURL=SocialMedia.js.map