import { GenericSA } from '../../common/service/generic.sa';
import {
    pageadditionalFactory,
  PageAdditionalFactory,
} from '../../constraint/factory/PageAdditional';
import { PageAdditionalDO } from '../../data/do/PageAdditional';
// @ts-ignore
import { PageAdditionalRequestDTO } from '../../data/dto/PageAdditional/request';
// @ts-ignore
import { PageAdditionalResponseDTO } from '../../data/dto/PageAdditional/response';
import { pageadditionalSM, PageAdditionalSM } from '../metier/PageAdditional';

export class PageAdditionalSA extends GenericSA<
  PageAdditionalDO,
  PageAdditionalRequestDTO,
  PageAdditionalResponseDTO,
  PageAdditionalSM,
  PageAdditionalFactory
> {
}

export const pageadditionalSA = new PageAdditionalSA(pageadditionalSM, pageadditionalFactory, 'PageAdditional');

