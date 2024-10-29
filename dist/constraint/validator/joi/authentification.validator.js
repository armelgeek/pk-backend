"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentificationSignoutRequestDTOSchema = exports.adminAuthentificationRequestDTOSchema = exports.resetPasswordRequestDTOSchema = exports.authentificationRequestDTOSchema = void 0;
const Joi = require("joi");
const regex_pattern_validator_1 = require("../regex-pattern.validator");
exports.authentificationRequestDTOSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().regex(regex_pattern_validator_1.regexPatternValidator.password),
    token: Joi.string().allow(''),
    type: Joi.string().allow(''),
});
exports.resetPasswordRequestDTOSchema = Joi.object({
    id: Joi.string().required(),
    password: Joi.string().required().regex(regex_pattern_validator_1.regexPatternValidator.password),
});
exports.adminAuthentificationRequestDTOSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
exports.authentificationSignoutRequestDTOSchema = Joi.object({
    deviceToken: Joi.string().required(),
});
//# sourceMappingURL=authentification.validator.js.map