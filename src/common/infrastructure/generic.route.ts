import { Router } from 'express';
import * as Joi from 'joi';
import { schemaValidator } from '../../service/middleware/joi';

import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { responseFormatter } from '../../service/middleware/response-formatter';

export type RouteOption = {
  controller: any;
  schema?: Joi.Schema;
  router?: Router;
  isSecured?: boolean;
  name?: string;
};

export const genericRoute = (option: RouteOption) => {
  const { controller, isSecured = false, router = Router(), schema = null, name } = option;

  router
    .route('/:id')
    .get(conditionnalJwtPassport(isSecured, name), controller.findById, responseFormatter)
    .delete(conditionnalJwtPassport(isSecured, name), controller.delete, responseFormatter);

  router
    .route('/')
    .get(conditionnalJwtPassport(isSecured, name), controller.findAll, responseFormatter)
    .post(
      conditionnalJwtPassport(isSecured, name),
      schemaValidator(schema),
      controller.create,
      responseFormatter,
    )
    .put(
      conditionnalJwtPassport(isSecured, name),
      schemaValidator(schema),
      controller.update,
      responseFormatter,
    );

  router.get('/count/elements', conditionnalJwtPassport(isSecured, name), controller.count, responseFormatter);
  router.get('/find/one', conditionnalJwtPassport(isSecured, name), controller.findOne, responseFormatter);

  router.put(
    '/partialUpdate/:id',
    conditionnalJwtPassport(isSecured, name),
    controller.partialUpdate,
    responseFormatter,
  );

  router.put(
    '/pushUpdate/:id',
    conditionnalJwtPassport(isSecured, name),
    controller.pushUpdate,
    responseFormatter,
  );

  router.put(
    '/update-many',
    conditionnalJwtPassport(isSecured, name),
    controller.updateMany,
    responseFormatter,
  );

  router.get('/sum/:field', conditionnalJwtPassport(isSecured, name), controller.sum, responseFormatter);
  router.post('/send-verification-mail', conditionnalJwtPassport(isSecured, name), controller.sendMail, responseFormatter);
  router.get('/me/:profileId/has-followed/:id', conditionnalJwtPassport(isSecured, name), controller.hasFollowed, responseFormatter);
  router.get('/me/:profileId/is-friend/:id', conditionnalJwtPassport(isSecured, name), controller.isFriend, responseFormatter);
  router.get('/to/find', conditionnalJwtPassport(isSecured, name), controller.findRegistration, responseFormatter);
  router.post('/add-member', conditionnalJwtPassport(isSecured, name), controller.addMemberToPage, responseFormatter);
  router.get('/to/get', conditionnalJwtPassport(isSecured, name), controller.getSharedNoteFor, responseFormatter);
  router.get('/to/getById', conditionnalJwtPassport(isSecured, name), controller.findSharedNoteById, responseFormatter);
  router.get('/to/check', conditionnalJwtPassport(isSecured, name), controller.checkHasNotedSameUser, responseFormatter);
  router.get('/to/compare', conditionnalJwtPassport(isSecured, name), controller.comparateNoteByUser, responseFormatter);
  router.post('/notify-user', conditionnalJwtPassport(isSecured, name), controller.notifyUser, responseFormatter);
  return router;
};
