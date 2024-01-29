import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { messageRouter } from './Message';
import { notificationRouter } from './Notification';
import { utilisateurRouter } from './Utilisateur';
import { langueRouter } from './Langue';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 router.use('/message', messageRouter);
 router.use('/notification', notificationRouter);
 router.use('/utilisateur', utilisateurRouter);
 router.use('/langue', langueRouter);
  
  return router;
};

