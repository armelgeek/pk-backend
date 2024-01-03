import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 
//  router.use('/test-api', testapiRouter);
  
  return router;
};

