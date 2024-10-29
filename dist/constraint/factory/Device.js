"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceFactory = exports.DeviceFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Device.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class DeviceFactory extends generic_factory_1.GenericFactory {
}
exports.DeviceFactory = DeviceFactory;
exports.deviceFactory = new DeviceFactory(schema, schema, responseSchema);
//# sourceMappingURL=Device.js.map