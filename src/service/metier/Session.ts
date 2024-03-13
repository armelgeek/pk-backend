import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SessionDO } from '../../data/do/Session';
import { SessionRepository } from '../../repository/Session';

export class SessionSM extends GenericSM<SessionDO, string, SessionRepository> {
}

export const sessionSM = new SessionSM(getCustomRepository(SessionRepository));

