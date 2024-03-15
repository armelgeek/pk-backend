import { GenericSA } from '../../common/service/generic.sa';
import {
    deviceFactory,
  DeviceFactory,
} from '../../constraint/factory/Device';
import { DeviceDO } from '../../data/do/Device';
// @ts-ignore
import { DeviceRequestDTO } from '../../data/dto/Device/request';
// @ts-ignore
import { DeviceResponseDTO } from '../../data/dto/Device/response';
import { deviceSM, DeviceSM } from '../metier/Device';

export class DeviceSA extends GenericSA<
  DeviceDO,
  DeviceRequestDTO,
  DeviceResponseDTO,
  DeviceSM,
  DeviceFactory
> {
}

export const deviceSA = new DeviceSA(deviceSM, deviceFactory, 'Device');

