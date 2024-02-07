import { GenericSA } from '../../common/service/generic.sa';
import {
    linksFactory,
  LinksFactory,
} from '../../constraint/factory/Links';
import { LinksDO } from '../../data/do/Links';
// @ts-ignore
import { LinksRequestDTO } from '../../data/dto/Links/request';
// @ts-ignore
import { LinksResponseDTO } from '../../data/dto/Links/response';
import { linksSM, LinksSM } from '../metier/Links';

export class LinksSA extends GenericSA<
  LinksDO,
  LinksRequestDTO,
  LinksResponseDTO,
  LinksSM,
  LinksFactory
> {
}

export const linksSA = new LinksSA(linksSM, linksFactory, 'Links');

