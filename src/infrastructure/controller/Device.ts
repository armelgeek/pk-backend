import { GenericController } from '../../common/infrastructure/generic.controller';
import { DeviceDO } from '../../data/do/Device';
// @ts-ignore
import { DeviceRequestDTO } from '../../data/dto/Device/request';
// @ts-ignore
import { DeviceResponseDTO } from '../../data/dto/Device/response';
import { deviceSA, DeviceSA } from '../../service/applicatif/Device';

class DeviceController extends GenericController<
  DeviceDO,
  DeviceRequestDTO,
  DeviceResponseDTO,
  DeviceSA
> {}

export const deviceController = new DeviceController(deviceSA);

