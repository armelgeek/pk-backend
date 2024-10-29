"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymenttypeSM = exports.PaymentTypeSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const PaymentType_1 = require("../../repository/PaymentType");
class PaymentTypeSM extends generic_sm_1.GenericSM {
}
exports.PaymentTypeSM = PaymentTypeSM;
exports.paymenttypeSM = new PaymentTypeSM((0, typeorm_1.getCustomRepository)(PaymentType_1.PaymentTypeRepository));
//# sourceMappingURL=PaymentType.js.map