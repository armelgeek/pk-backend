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
exports.UtilisateurDO = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const logger_1 = require("../../../common/logger");
let UtilisateurDO = class UtilisateurDO {
    // @Column(() => NotificationDO)
    // notifications: ObjectID[];
    // @Column(() => DeviceTokenDO)
    // deviceTokens: string[];
    async beforeInsert() {
        try {
            this.dateInscription = new Date();
            this.password = await bcrypt.hashSync(this.password, 10);
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
    async hashPasswordUpdate() {
        if (!this.password.includes('$2a$')) {
            this.password = await bcrypt.hashSync(this.password, 10);
        }
        this.dateModification = new Date();
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeorm_1.ObjectID)
], UtilisateurDO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true, unique: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25, default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "ville", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0
    }),
    __metadata("design:type", Number)
], UtilisateurDO.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], UtilisateurDO.prototype, "dateInscription", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], UtilisateurDO.prototype, "dateModification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], UtilisateurDO.prototype, "dateDerniereConnexion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], UtilisateurDO.prototype, "actif", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UtilisateurDO.prototype, "socketId", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurDO.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurDO.prototype, "hashPasswordUpdate", null);
UtilisateurDO = __decorate([
    (0, typeorm_1.Entity)('utilisateur')
], UtilisateurDO);
exports.UtilisateurDO = UtilisateurDO;
//# sourceMappingURL=utilisateur.do.js.map