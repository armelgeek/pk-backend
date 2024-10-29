"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRequestDTOSchema = exports.toJoi = void 0;
const Joi = require("joi");
const data_1 = require("../../../data");
const toJoi = (attributes) => (attributes === null || attributes === void 0 ? void 0 : attributes.reduce((acc, { key, type, isArray, required }) => {
    var _a;
    if (type && type.$ref) {
        const name = (_a = data_1.elements.find(({ _id }) => type.$ref === _id)) === null || _a === void 0 ? void 0 : _a.name;
        if (name === 'Location' || name === 'Phone' || name === 'Currency') {
            return { ...acc, [key]: Joi.object().default({}) };
        }
    }
    return ({ ...acc, [key]: isArray ? Joi.array().default([]) : type === 'boolean' ? Joi.boolean().default(false) : type === 'number' ? Joi.number() : type === 'location' ? Joi.object() : required ? Joi.string().required() : Joi.string().allow('') });
}, {})) || {};
exports.toJoi = toJoi;
exports.default = Object.keys(data_1.dataTDO).reduce((acc, entity) => {
    return {
        ...acc,
        [entity]: Joi.object((0, exports.toJoi)(data_1.dataTDO[entity].attributes)),
    };
}, {});
exports.notificationRequestDTOSchema = Joi.object({
    titre: Joi.string().required(),
    message: Joi.string().required(),
    utilisateurIds: Joi.array().default([]),
    tous: Joi.boolean().default(false),
}).or('utilisateurIds', 'tous');
//# sourceMappingURL=index.js.map