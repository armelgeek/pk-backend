import { Router } from 'express';

import { utilisateurRouter } from './utilisateur/utilisateur.route';
import { administrateurRouter } from './administrateur';
import { authentificationRouter } from './authentification/authentification.route';
import { inscriptionRouter } from './inscription/inscription.route';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { HttpStatus } from '../../data/constants/http-status';

import { routes } from './routes';
const appRoutes = () => {
  const secured = conditionnalJwtPassport(true);
  const router = routes();
  router.get('/api-status', (req, res) => res.status(HttpStatus.OK).send('ok'));
  router.use('/users', utilisateurRouter);
  router.use('/authentification', authentificationRouter);
  router.use('/inscription', inscriptionRouter);
  router.use('/administrateur', administrateurRouter);
  
  return router;
};

export const appRouter = appRoutes();
