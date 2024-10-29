"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = exports.initFirebaseSdk = void 0;
const admin = require("firebase-admin");
const key = require('../../../firebase-admin-sdk.json');
const initFirebaseSdk = () => admin.initializeApp({
    credential: admin.credential.cert(key),
});
exports.initFirebaseSdk = initFirebaseSdk;
const sendNotification = async ({ tokens, title, body }) => {
    const messaging = admin.messaging();
    try {
        const data = await Promise.all(tokens.map(async (token) => await messaging.send({
            notification: { title, body },
            token
        })));
        return data;
    }
    catch (error) {
        return Promise.reject(error);
    }
};
exports.sendNotification = sendNotification;
//# sourceMappingURL=firebase-cloud-messaging.js.map