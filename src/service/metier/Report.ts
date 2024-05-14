import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ReportDO } from '../../data/do/Report';
import { ReportRepository } from '../../repository/Report';

export class ReportSM extends GenericSM<ReportDO, string, ReportRepository> {
}

export const reportSM = new ReportSM(getCustomRepository(ReportRepository));

