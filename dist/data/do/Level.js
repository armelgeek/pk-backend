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
exports.LevelDO = void 0;
const typeorm_1 = require("typeorm");
let LevelDO = class LevelDO {
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
], LevelDO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], LevelDO.prototype, "smallBlind", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], LevelDO.prototype, "bigBlind", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], LevelDO.prototype, "anteBb", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], LevelDO.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], LevelDO.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], LevelDO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], LevelDO.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], LevelDO.prototype, "lastActivityAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LevelDO.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LevelDO.prototype, "beforeUpdate", null);
LevelDO = __decorate([
    (0, typeorm_1.Entity)('level')
], LevelDO);
exports.LevelDO = LevelDO;
//# sourceMappingURL=Level.js.map