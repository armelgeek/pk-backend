"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsSA = exports.SettingsSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Settings_1 = require("../../constraint/factory/Settings");
const Settings_2 = require("../metier/Settings");
class SettingsSA extends generic_sa_1.GenericSA {
}
exports.SettingsSA = SettingsSA;
exports.settingsSA = new SettingsSA(Settings_2.settingsSM, Settings_1.settingsFactory, 'Settings');
//# sourceMappingURL=Settings.js.map