import { GenericSA } from '../../common/service/generic.sa';
import {
    pageFactory,
  PageFactory,
} from '../../constraint/factory/Page';
import { PageDO } from '../../data/do/Page';
// @ts-ignore
import { PageRequestDTO } from '../../data/dto/Page/request';
// @ts-ignore
import { PageResponseDTO } from '../../data/dto/Page/response';
import { pageSM, PageSM } from '../metier/Page';

export class PageSA extends GenericSA<
  PageDO,
  PageRequestDTO,
  PageResponseDTO,
  PageSM,
  PageFactory
> {
}

export const pageSA = new PageSA(pageSM, pageFactory, 'Page');

