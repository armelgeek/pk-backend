import { GenericController } from '../../common/infrastructure/generic.controller';
import { ReportDO } from '../../data/do/Report';
// @ts-ignore
import { ReportRequestDTO } from '../../data/dto/Report/request';
// @ts-ignore
import { ReportResponseDTO } from '../../data/dto/Report/response';
import { reportSA, ReportSA } from '../../service/applicatif/Report';

class ReportController extends GenericController<
  ReportDO,
  ReportRequestDTO,
  ReportResponseDTO,
  ReportSA
> {}

export const reportController = new ReportController(reportSA);

