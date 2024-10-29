"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passport_local_1 = require("./passport-local");
passport.use(passport_local_1.jwtStrategy);
passport.use(passport_local_1.localStrategy);
exports.default = passport;
//# sourceMappingURL=index.js.map