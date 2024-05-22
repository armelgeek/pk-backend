import { GenericController } from '../../common/infrastructure/generic.controller';
import { VisitorsDO } from '../../data/do/Visitors';
// @ts-ignore
import { VisitorsRequestDTO } from '../../data/dto/Visitors/request';
// @ts-ignore
import { VisitorsResponseDTO } from '../../data/dto/Visitors/response';
import { visitorsSA, VisitorsSA } from '../../service/applicatif/Visitors';

class VisitorsController extends GenericController<
  VisitorsDO,
  VisitorsRequestDTO,
  VisitorsResponseDTO,
  VisitorsSA
> {}

export const visitorsController = new VisitorsController(visitorsSA);

