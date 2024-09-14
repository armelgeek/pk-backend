import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { AssessmentDO } from '../../data/do/Assessment';
import { AssessmentRepository } from '../../repository/Assessment';

export class AssessmentSM extends GenericSM<AssessmentDO, string, AssessmentRepository> {
}

export const assessmentSM = new AssessmentSM(getCustomRepository(AssessmentRepository));

