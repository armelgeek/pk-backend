import * as Joi from 'joi';
import { dataTDO } from '../../../data';
import { regexPatternValidator } from '../regex-pattern.validator';

export const utilisateurRequestDTOSchema = Joi.object({
  ...dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: Joi.string().allow('') }), {}),
});

export const utilisateurEditRequestDTOSchema = Joi.object({
  id: Joi.string().uuid().required(),
  // nom: Joi.string().max(50).required(),
  // prenom: Joi.string().max(100),
  telephone: Joi.string().pattern(regexPatternValidator.phone),
  email: Joi.string().email().required(),
  ville: Joi.string().max(25).required(),
  adresse: Joi.string().max(50).required(),
});

export const utilisateurEditBORequestDTOSchema = Joi.object({
  id: Joi.string().uuid().required(),
  nom: Joi.string().max(50).required(),
  prenom: Joi.string().max(100),
  telephone: Joi.string().pattern(regexPatternValidator.phone),
  email: Joi.string().email().required(),
  ville: Joi.string().max(25).required(),
  adresse: Joi.string().max(50).required(),
});

export const utilisateurPasswordResetRequestDTOSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const utilisateurValidateResetRequestDTOSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().max(6).required(),
});

export const utilisateurStatusRequestDTOSchema = Joi.object({
  id: Joi.string().uuid().required(),
  actif: Joi.boolean().required(),
});
