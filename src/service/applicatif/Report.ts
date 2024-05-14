import { GenericSA } from '../../common/service/generic.sa';
import {
    reportFactory,
  ReportFactory,
} from '../../constraint/factory/Report';
import { ReportDO } from '../../data/do/Report';
// @ts-ignore
import { ReportRequestDTO } from '../../data/dto/Report/request';
// @ts-ignore
import { ReportResponseDTO } from '../../data/dto/Report/response';
import { reportSM, ReportSM } from '../metier/Report';

export class ReportSA extends GenericSA<
  ReportDO,
  ReportRequestDTO,
  ReportResponseDTO,
  ReportSM,
  ReportFactory
> {
}

export const reportSA = new ReportSA(reportSM, reportFactory, 'Report');

