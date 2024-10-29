"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentFactory = exports.CommentFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Comment.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class CommentFactory extends generic_factory_1.GenericFactory {
}
exports.CommentFactory = CommentFactory;
exports.commentFactory = new CommentFactory(schema, schema, responseSchema);
//# sourceMappingURL=Comment.js.map