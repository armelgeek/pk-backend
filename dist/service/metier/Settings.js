"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsSM = exports.SettingsSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Settings_1 = require("../../repository/Settings");
class SettingsSM extends generic_sm_1.GenericSM {
}
exports.SettingsSM = SettingsSM;
exports.settingsSM = new SettingsSM((0, typeorm_1.getCustomRepository)(Settings_1.SettingsRepository));
//# sourceMappingURL=Settings.js.map