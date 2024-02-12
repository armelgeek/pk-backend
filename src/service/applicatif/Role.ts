import { GenericSA } from '../../common/service/generic.sa';
import {
    roleFactory,
  RoleFactory,
} from '../../constraint/factory/Role';
import { RoleDO } from '../../data/do/Role';
// @ts-ignore
import { RoleRequestDTO } from '../../data/dto/Role/request';
// @ts-ignore
import { RoleResponseDTO } from '../../data/dto/Role/response';
import { roleSM, RoleSM } from '../metier/Role';

export class RoleSA extends GenericSA<
  RoleDO,
  RoleRequestDTO,
  RoleResponseDTO,
  RoleSM,
  RoleFactory
> {
}

export const roleSA = new RoleSA(roleSM, roleFactory, 'Role');

