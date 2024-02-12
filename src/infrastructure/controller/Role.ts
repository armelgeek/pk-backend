import { GenericController } from '../../common/infrastructure/generic.controller';
import { RoleDO } from '../../data/do/Role';
// @ts-ignore
import { RoleRequestDTO } from '../../data/dto/Role/request';
// @ts-ignore
import { RoleResponseDTO } from '../../data/dto/Role/response';
import { roleSA, RoleSA } from '../../service/applicatif/Role';

class RoleController extends GenericController<
  RoleDO,
  RoleRequestDTO,
  RoleResponseDTO,
  RoleSA
> {}

export const roleController = new RoleController(roleSA);

