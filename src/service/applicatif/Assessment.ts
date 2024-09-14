import { GenericSA } from '../../common/service/generic.sa';
import {
    assessmentFactory,
  AssessmentFactory,
} from '../../constraint/factory/Assessment';
import { AssessmentDO } from '../../data/do/Assessment';
// @ts-ignore
import { AssessmentRequestDTO } from '../../data/dto/Assessment/request';
// @ts-ignore
import { AssessmentResponseDTO } from '../../data/dto/Assessment/response';
import { assessmentSM, AssessmentSM } from '../metier/Assessment';

export class AssessmentSA extends GenericSA<
  AssessmentDO,
  AssessmentRequestDTO,
  AssessmentResponseDTO,
  AssessmentSM,
  AssessmentFactory
> {
}

export const assessmentSA = new AssessmentSA(assessmentSM, assessmentFactory, 'Assessment');

