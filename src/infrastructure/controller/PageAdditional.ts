import { GenericController } from '../../common/infrastructure/generic.controller';
import { PageAdditionalDO } from '../../data/do/PageAdditional';
// @ts-ignore
import { PageAdditionalRequestDTO } from '../../data/dto/PageAdditional/request';
// @ts-ignore
import { PageAdditionalResponseDTO } from '../../data/dto/PageAdditional/response';
import { pageadditionalSA, PageAdditionalSA } from '../../service/applicatif/PageAdditional';

class PageAdditionalController extends GenericController<
  PageAdditionalDO,
  PageAdditionalRequestDTO,
  PageAdditionalResponseDTO,
  PageAdditionalSA
> {}

export const pageadditionalController = new PageAdditionalController(pageadditionalSA);

