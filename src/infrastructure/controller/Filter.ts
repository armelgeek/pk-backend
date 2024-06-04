import { GenericController } from '../../common/infrastructure/generic.controller';
import { FilterDO } from '../../data/do/Filter';
// @ts-ignore
import { FilterRequestDTO } from '../../data/dto/Filter/request';
// @ts-ignore
import { FilterResponseDTO } from '../../data/dto/Filter/response';
import { filterSA, FilterSA } from '../../service/applicatif/Filter';

class FilterController extends GenericController<
  FilterDO,
  FilterRequestDTO,
  FilterResponseDTO,
  FilterSA
> {}

export const filterController = new FilterController(filterSA);

