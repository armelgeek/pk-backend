"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialInscriptionRequestDTOSchema = exports.validationCodeRequestDTOSchema = exports.reSendCodeRequestDTOSchema = exports.inscriptionRequestDTOSchema = void 0;
const Joi = require("joi");
const data_1 = require("../../../data");
exports.inscriptionRequestDTOSchema = Joi.object({
    ...data_1.dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: Joi.string().allow('') }), {}),
    username: Joi.string().max(50).required(),
    prenom: Joi.string().max(100),
    phone: Joi.object().keys({
        paysCode: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        callingCode: Joi.string().required(),
    }).allow({}),
    email: Joi.string().email().required(),
    // ville: Joi.string().max(25).required(),
    // adresse: Joi.string().max(50).required(),
    password: Joi.string().min(6),
    imageUrl: Joi.string().allow(''),
});
exports.reSendCodeRequestDTOSchema = Joi.object({
    email: Joi.string().email(),
    /**phone: Joi.object().keys({
      paysCode: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      callingCode: Joi.string().required(),
    }),**/
});
exports.validationCodeRequestDTOSchema = Joi.object({
    email: Joi.string().email(),
    /**phone: Joi.object().keys({
      paysCode: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      callingCode: Joi.string().required(),
    }),**/
    code: Joi.string().required(),
});
exports.socialInscriptionRequestDTOSchema = Joi.object({
    imageUrl: Joi.string().allow(''),
    prenom: Joi.string().allow(''),
    nom: Joi.string().allow(''),
    email: Joi.string().email().allow(''),
    facebookId: Joi.string().allow(''),
    appleId: Joi.string().allow(''),
    googleId: Joi.string().allow(''),
});
//# sourceMappingURL=inscription.validator.js.map