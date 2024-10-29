"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Settings_1 = require("../../service/applicatif/Settings");
class SettingsController extends generic_controller_1.GenericController {
}
exports.settingsController = new SettingsController(Settings_1.settingsSA);
//# sourceMappingURL=Settings.js.map