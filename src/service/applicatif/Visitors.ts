import { GenericSA } from '../../common/service/generic.sa';
import {
    visitorsFactory,
  VisitorsFactory,
} from '../../constraint/factory/Visitors';
import { VisitorsDO } from '../../data/do/Visitors';
// @ts-ignore
import { VisitorsRequestDTO } from '../../data/dto/Visitors/request';
// @ts-ignore
import { VisitorsResponseDTO } from '../../data/dto/Visitors/response';
import { visitorsSM, VisitorsSM } from '../metier/Visitors';

export class VisitorsSA extends GenericSA<
  VisitorsDO,
  VisitorsRequestDTO,
  VisitorsResponseDTO,
  VisitorsSM,
  VisitorsFactory
> {
}

export const visitorsSA = new VisitorsSA(visitorsSM, visitorsFactory, 'Visitors');

