import { GenericController } from '../../common/infrastructure/generic.controller';
import { AssessmentDO } from '../../data/do/Assessment';
// @ts-ignore
import { AssessmentRequestDTO } from '../../data/dto/Assessment/request';
// @ts-ignore
import { AssessmentResponseDTO } from '../../data/dto/Assessment/response';
import { assessmentSA, AssessmentSA } from '../../service/applicatif/Assessment';

class AssessmentController extends GenericController<
  AssessmentDO,
  AssessmentRequestDTO,
  AssessmentResponseDTO,
  AssessmentSA
> {}

export const assessmentController = new AssessmentController(assessmentSA);

