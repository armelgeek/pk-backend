import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { FilterDO } from '../../data/do/Filter';
import { FilterRepository } from '../../repository/Filter';

export class FilterSM extends GenericSM<FilterDO, string, FilterRepository> {
}

export const filterSM = new FilterSM(getCustomRepository(FilterRepository));

