import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ConfindialityDO } from '../../data/do/Confindiality';
import { ConfindialityRepository } from '../../repository/Confindiality';

export class ConfindialitySM extends GenericSM<ConfindialityDO, string, ConfindialityRepository> {
}

export const confindialitySM = new ConfindialitySM(getCustomRepository(ConfindialityRepository));

