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
exports.FilterDO = void 0;
const typeorm_1 = require("typeorm");
let FilterDO = class FilterDO {
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
], FilterDO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], FilterDO.prototype, "poste", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FilterDO.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FilterDO.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FilterDO.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FilterDO.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], FilterDO.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FilterDO.prototype, "perimeter", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FilterDO.prototype, "prizePool", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], FilterDO.prototype, "buyIn", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], FilterDO.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], FilterDO.prototype, "gameType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "cashGame", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "tournoi", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "satellite", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "page", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FilterDO.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FilterDO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FilterDO.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], FilterDO.prototype, "lastActivityAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilterDO.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilterDO.prototype, "beforeUpdate", null);
FilterDO = __decorate([
    (0, typeorm_1.Entity)('filter')
], FilterDO);
exports.FilterDO = FilterDO;
//# sourceMappingURL=Filter.js.map