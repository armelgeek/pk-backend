"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
const axios_1 = require("axios");
const sendSMS = async (messages, receiver) => {
    try {
        const res = await axios_1.default.post('http://158.220.114.227:7070/service/sendsms', {
            messages,
            sender: 'RELIA',
            receiver,
        }, {
            headers: {
                application: 'pokerApps',
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    }
    catch (error) {
        return error;
    }
};
exports.sendSMS = sendSMS;
//# sourceMappingURL=sms.js.map