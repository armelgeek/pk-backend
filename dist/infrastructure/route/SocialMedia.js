"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialmediaRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const SocialMedia_1 = require("../controller/SocialMedia");
const socialmediaRoutes = () => (0, generic_route_1.genericRoute)({ controller: SocialMedia_1.socialmediaController, schema: joi_1.default.SocialMedia, name: 'SocialMedia' });
exports.socialmediaRouter = socialmediaRoutes();
//# sourceMappingURL=SocialMedia.js.map