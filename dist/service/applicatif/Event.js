"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSA = exports.EventSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Event_1 = require("../../constraint/factory/Event");
const Event_2 = require("../metier/Event");
class EventSA extends generic_sa_1.GenericSA {
}
exports.EventSA = EventSA;
exports.eventSA = new EventSA(Event_2.eventSM, Event_1.eventFactory, 'Event');
//# sourceMappingURL=Event.js.map