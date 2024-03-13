import { GenericSA } from '../../common/service/generic.sa';
import {
    sessionFactory,
  SessionFactory,
} from '../../constraint/factory/Session';
import { SessionDO } from '../../data/do/Session';
// @ts-ignore
import { SessionRequestDTO } from '../../data/dto/Session/request';
// @ts-ignore
import { SessionResponseDTO } from '../../data/dto/Session/response';
import { sessionSM, SessionSM } from '../metier/Session';

export class SessionSA extends GenericSA<
  SessionDO,
  SessionRequestDTO,
  SessionResponseDTO,
  SessionSM,
  SessionFactory
> {
}

export const sessionSA = new SessionSA(sessionSM, sessionFactory, 'Session');

