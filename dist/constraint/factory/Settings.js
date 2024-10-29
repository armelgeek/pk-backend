"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsFactory = exports.SettingsFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Settings.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class SettingsFactory extends generic_factory_1.GenericFactory {
}
exports.SettingsFactory = SettingsFactory;
exports.settingsFactory = new SettingsFactory(schema, schema, responseSchema);
//# sourceMappingURL=Settings.js.map