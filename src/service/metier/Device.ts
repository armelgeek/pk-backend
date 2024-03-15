import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { DeviceDO } from '../../data/do/Device';
import { DeviceRepository } from '../../repository/Device';

export class DeviceSM extends GenericSM<DeviceDO, string, DeviceRepository> {
}

export const deviceSM = new DeviceSM(getCustomRepository(DeviceRepository));

