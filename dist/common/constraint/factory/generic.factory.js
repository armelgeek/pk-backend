"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFactory = void 0;
const morphism_1 = require("morphism");
class GenericFactory {
    get responseDtoSchema() {
        return this.targetResponseDtoSchema;
    }
    constructor(targetDoSchema, targetRequestDtoSchema, targetResponseDtoSchema) {
        this.targetRequestDtoSchema = targetRequestDtoSchema;
        this.targetResponseDtoSchema = targetResponseDtoSchema;
        this.targetDoSchema = targetDoSchema;
        this.mapper = morphism_1.morphism;
    }
    toRequestDto(source) {
        return this.mapper(this.targetRequestDtoSchema, source);
    }
    toResponseDto(source) {
        return this.mapper(this.targetResponseDtoSchema, source);
    }
    toDo(source) {
        return this.mapper(this.targetDoSchema, source);
    }
}
exports.GenericFactory = GenericFactory;
//# sourceMappingURL=generic.factory.js.map