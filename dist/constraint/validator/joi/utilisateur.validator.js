"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurStatusRequestDTOSchema = exports.utilisateurValidateResetRequestDTOSchema = exports.utilisateurPasswordResetRequestDTOSchema = exports.utilisateurEditBORequestDTOSchema = exports.utilisateurEditRequestDTOSchema = exports.utilisateurRequestDTOSchema = void 0;
const Joi = require("joi");
const data_1 = require("../../../data");
const regex_pattern_validator_1 = require("../regex-pattern.validator");
exports.utilisateurRequestDTOSchema = Joi.object({
    ...data_1.dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: Joi.string().allow('') }), {}),
});
exports.utilisateurEditRequestDTOSchema = Joi.object({
    id: Joi.string().uuid().required(),
    // nom: Joi.string().max(50).required(),
    // prenom: Joi.string().max(100),
    phone: Joi.string().pattern(regex_pattern_validator_1.regexPatternValidator.phone),
    email: Joi.string().email().required(),
    ville: Joi.string().max(25).required(),
    adresse: Joi.string().max(50).required(),
});
exports.utilisateurEditBORequestDTOSchema = Joi.object({
    // id: Joi.string().uuid().required(),
    nom: Joi.string().max(50),
    prenom: Joi.string().max(100),
    // phone: Joi.string().pattern(regexPatternValidator.phone),
    // email: Joi.string().email().required(),
    ville: Joi.string().max(25),
    adresse: Joi.string().max(50),
    dateNaissance: Joi.string(),
    imageUrl: Joi.string(),
});
exports.utilisateurPasswordResetRequestDTOSchema = Joi.object({
    email: Joi.string().email().optional(),
    phone: Joi.alternatives().try(Joi.object({
        paysCode: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        callingCode: Joi.string().required(),
    }), Joi.string().empty('')).optional(),
}).xor('email', 'phone');
exports.utilisateurValidateResetRequestDTOSchema = Joi.object({
    email: Joi.string().email().required(),
    code: Joi.string().max(6).required(),
});
exports.utilisateurStatusRequestDTOSchema = Joi.object({
    id: Joi.string().uuid().required(),
    actif: Joi.boolean().required(),
});
//# sourceMappingURL=utilisateur.validator.js.map