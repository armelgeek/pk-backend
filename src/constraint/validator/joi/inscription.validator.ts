import * as Joi from 'joi';
import { dataTDO } from '../../../data';
import { regexPatternValidator } from '../regex-pattern.validator';

export const inscriptionRequestDTOSchema = Joi.object({
  ...dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: Joi.string().allow('') }), {}),
  username: Joi.string().max(50).required(),
  prenom: Joi.string().max(100),
  // phone: Joi.string().pattern(regexPatternValidator.phone),
  email: Joi.string().email().required(),
  // ville: Joi.string().max(25).required(),
  // adresse: Joi.string().max(50).required(),
  password: Joi.string().min(6),
  imageUrl: Joi.string().allow(''),
});

export const reSendCodeRequestDTOSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const validationCodeRequestDTOSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
});
