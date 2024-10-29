"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationFactory = exports.NotificationFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Notification.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class NotificationFactory extends generic_factory_1.GenericFactory {
}
exports.NotificationFactory = NotificationFactory;
exports.notificationFactory = new NotificationFactory(schema, schema, responseSchema);
//# sourceMappingURL=Notification.js.map