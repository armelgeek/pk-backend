"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthenticationRepository = void 0;
const typeorm_1 = require("typeorm");
const TwoFactorAuthentication_1 = require("../data/do/TwoFactorAuthentication");
let TwoFactorAuthenticationRepository = class TwoFactorAuthenticationRepository extends typeorm_1.MongoRepository {
};
TwoFactorAuthenticationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(TwoFactorAuthentication_1.TwoFactorAuthenticationDO)
], TwoFactorAuthenticationRepository);
exports.TwoFactorAuthenticationRepository = TwoFactorAuthenticationRepository;
//# sourceMappingURL=TwoFactorAuthentication.js.map