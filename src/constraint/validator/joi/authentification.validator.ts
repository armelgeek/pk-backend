import * as Joi from 'joi';
import { regexPatternValidator } from '../regex-pattern.validator';

export const authentificationRequestDTOSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().regex(regexPatternValidator.password),
  token: Joi.string().allow(''),
  type: Joi.string().allow(''),
});

export const resetPasswordRequestDTOSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required().regex(regexPatternValidator.password),
});

export const adminAuthentificationRequestDTOSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const authentificationSignoutRequestDTOSchema = Joi.object({
  deviceToken: Joi.string().required(),
});
