import { GenericSA } from '../../common/service/generic.sa';
import {
    restrictionFactory,
  RestrictionFactory,
} from '../../constraint/factory/Restriction';
import { RestrictionDO } from '../../data/do/Restriction';
// @ts-ignore
import { RestrictionRequestDTO } from '../../data/dto/Restriction/request';
// @ts-ignore
import { RestrictionResponseDTO } from '../../data/dto/Restriction/response';
import { restrictionSM, RestrictionSM } from '../metier/Restriction';

export class RestrictionSA extends GenericSA<
  RestrictionDO,
  RestrictionRequestDTO,
  RestrictionResponseDTO,
  RestrictionSM,
  RestrictionFactory
> {
}

export const restrictionSA = new RestrictionSA(restrictionSM, restrictionFactory, 'Restriction');

