import { GenericSA } from '../../common/service/generic.sa';
import {
    linkFactory,
  LinkFactory,
} from '../../constraint/factory/Link';
import { LinkDO } from '../../data/do/Link';
// @ts-ignore
import { LinkRequestDTO } from '../../data/dto/Link/request';
// @ts-ignore
import { LinkResponseDTO } from '../../data/dto/Link/response';
import { linkSM, LinkSM } from '../metier/Link';

export class LinkSA extends GenericSA<
  LinkDO,
  LinkRequestDTO,
  LinkResponseDTO,
  LinkSM,
  LinkFactory
> {
}

export const linkSA = new LinkSA(linkSM, linkFactory, 'Link');

