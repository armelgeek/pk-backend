"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Device_1 = require("../../service/applicatif/Device");
class DeviceController extends generic_controller_1.GenericController {
}
exports.deviceController = new DeviceController(Device_1.deviceSA);
//# sourceMappingURL=Device.js.map