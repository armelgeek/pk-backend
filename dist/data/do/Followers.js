"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersDO = void 0;
const typeorm_1 = require("typeorm");
let FollowersDO = class FollowersDO {
    beforeInsert() {
        this.lastActivityAt = new Date();
        this.createdAt = new Date();
    }
    beforeUpdate() {
        this.lastActivityAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeorm_1.ObjectID)
], FollowersDO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FollowersDO.prototype, "follow", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FollowersDO.prototype, "follower", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FollowersDO.prototype, "friends", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FollowersDO.prototype, "confirmed", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FollowersDO.prototype, "cancel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FollowersDO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FollowersDO.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FollowersDO.prototype, "lastActivityAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FollowersDO.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FollowersDO.prototype, "beforeUpdate", null);
FollowersDO = __decorate([
    (0, typeorm_1.Entity)('followers')
], FollowersDO);
exports.FollowersDO = FollowersDO;
//# sourceMappingURL=Followers.js.map