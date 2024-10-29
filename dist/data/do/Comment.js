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
exports.CommentDO = void 0;
const typeorm_1 = require("typeorm");
let CommentDO = class CommentDO {
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
], CommentDO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], CommentDO.prototype, "hideFor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "profileId", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], CommentDO.prototype, "happy", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], CommentDO.prototype, "love", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], CommentDO.prototype, "sad", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], CommentDO.prototype, "veryhappy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], CommentDO.prototype, "collectionName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], CommentDO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], CommentDO.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], CommentDO.prototype, "lastActivityAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentDO.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentDO.prototype, "beforeUpdate", null);
CommentDO = __decorate([
    (0, typeorm_1.Entity)('comment')
], CommentDO);
exports.CommentDO = CommentDO;
//# sourceMappingURL=Comment.js.map