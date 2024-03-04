import { GenericController } from '../../common/infrastructure/generic.controller';
import { PageDO } from '../../data/do/Page';
// @ts-ignore
import { PageRequestDTO } from '../../data/dto/Page/request';
// @ts-ignore
import { PageResponseDTO } from '../../data/dto/Page/response';
import { pageSA, PageSA } from '../../service/applicatif/Page';

class PageController extends GenericController<
  PageDO,
  PageRequestDTO,
  PageResponseDTO,
  PageSA
> {}

export const pageController = new PageController(pageSA);

