import * as Joi from 'joi';
import { dataTDO, elements } from '../../../data';

export const toJoi = (attributes) => attributes?.reduce(
  (acc, { key, type, isArray, required }) => {
    if (type && type.$ref) {
      const name = elements.find(({ _id }) => type.$ref === _id)?.name
      if (name === 'Location' || name === 'Phone' || name === 'Currency') {
        return { ...acc, [key]: Joi.object().default({})}
      }
      
    }
    return (
      { ...acc, [key]: isArray ? Joi.array().default([]) : type === 'boolean' ? Joi.boolean().default(false) : type === 'number' ? Joi.number() : type === 'location' ? Joi.object() : required ? Joi.string().required() : Joi.string().allow('') })
  }, {}) || {}

export default Object.keys(dataTDO).reduce((acc: any, entity) => {
  return {
    ...acc,
    [entity]: Joi.object(toJoi(dataTDO[entity].attributes)),
  }
}, {});

export const notificationRequestDTOSchema = Joi.object({
  titre: Joi.string().required(),
  message: Joi.string().required(),
  utilisateurIds: Joi.array().default([]),
  tous: Joi.boolean().default(false),
}).or('utilisateurIds', 'tous');
