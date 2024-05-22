import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { VisitorsDO } from '../../data/do/Visitors';
import { VisitorsRepository } from '../../repository/Visitors';

export class VisitorsSM extends GenericSM<VisitorsDO, string, VisitorsRepository> {
}

export const visitorsSM = new VisitorsSM(getCustomRepository(VisitorsRepository));

