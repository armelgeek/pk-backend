"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymenttypeSA = exports.PaymentTypeSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const PaymentType_1 = require("../../constraint/factory/PaymentType");
const PaymentType_2 = require("../metier/PaymentType");
class PaymentTypeSA extends generic_sa_1.GenericSA {
}
exports.PaymentTypeSA = PaymentTypeSA;
exports.paymenttypeSA = new PaymentTypeSA(PaymentType_2.paymenttypeSM, PaymentType_1.paymenttypeFactory, 'PaymentType');
//# sourceMappingURL=PaymentType.js.map