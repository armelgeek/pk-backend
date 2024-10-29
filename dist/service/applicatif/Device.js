"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceSA = exports.DeviceSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Device_1 = require("../../constraint/factory/Device");
const Device_2 = require("../metier/Device");
class DeviceSA extends generic_sa_1.GenericSA {
}
exports.DeviceSA = DeviceSA;
exports.deviceSA = new DeviceSA(Device_2.deviceSM, Device_1.deviceFactory, 'Device');
//# sourceMappingURL=Device.js.map