import { GenericSA } from '../../common/service/generic.sa';
import {
    filterFactory,
  FilterFactory,
} from '../../constraint/factory/Filter';
import { FilterDO } from '../../data/do/Filter';
// @ts-ignore
import { FilterRequestDTO } from '../../data/dto/Filter/request';
// @ts-ignore
import { FilterResponseDTO } from '../../data/dto/Filter/response';
import { filterSM, FilterSM } from '../metier/Filter';

export class FilterSA extends GenericSA<
  FilterDO,
  FilterRequestDTO,
  FilterResponseDTO,
  FilterSM,
  FilterFactory
> {
}

export const filterSA = new FilterSA(filterSM, filterFactory, 'Filter');

