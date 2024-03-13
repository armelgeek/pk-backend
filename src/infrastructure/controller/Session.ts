import { GenericController } from '../../common/infrastructure/generic.controller';
import { SessionDO } from '../../data/do/Session';
// @ts-ignore
import { SessionRequestDTO } from '../../data/dto/Session/request';
// @ts-ignore
import { SessionResponseDTO } from '../../data/dto/Session/response';
import { sessionSA, SessionSA } from '../../service/applicatif/Session';

class SessionController extends GenericController<
  SessionDO,
  SessionRequestDTO,
  SessionResponseDTO,
  SessionSA
> {}

export const sessionController = new SessionController(sessionSA);

