"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSM = exports.EventSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Event_1 = require("../../repository/Event");
class EventSM extends generic_sm_1.GenericSM {
}
exports.EventSM = EventSM;
exports.eventSM = new EventSM((0, typeorm_1.getCustomRepository)(Event_1.EventRepository));
//# sourceMappingURL=Event.js.map