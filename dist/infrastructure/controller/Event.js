"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Event_1 = require("../../service/applicatif/Event");
class EventController extends generic_controller_1.GenericController {
}
exports.eventController = new EventController(Event_1.eventSA);
//# sourceMappingURL=Event.js.map