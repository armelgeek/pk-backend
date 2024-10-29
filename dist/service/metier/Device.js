"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceSM = exports.DeviceSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Device_1 = require("../../repository/Device");
class DeviceSM extends generic_sm_1.GenericSM {
}
exports.DeviceSM = DeviceSM;
exports.deviceSM = new DeviceSM((0, typeorm_1.getCustomRepository)(Device_1.DeviceRepository));
//# sourceMappingURL=Device.js.map