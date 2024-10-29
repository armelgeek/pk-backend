"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymenttypeController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const PaymentType_1 = require("../../service/applicatif/PaymentType");
class PaymentTypeController extends generic_controller_1.GenericController {
}
exports.paymenttypeController = new PaymentTypeController(PaymentType_1.paymenttypeSA);
//# sourceMappingURL=PaymentType.js.map