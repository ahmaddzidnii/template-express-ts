"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = require("express-rate-limit");
const app = (0, express_1.default)();
const rateLimitConfig = (0, express_rate_limit_1.rateLimit)({
    windowMs: 20 * 1000,
    limit: 15,
    legacyHeaders: true,
    standardHeaders: "draft-7",
});
app.use(rateLimitConfig);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("tiny"));
// Apply routes before error handling
// app.use("/v1", root);
// Apply error handling last
// app.use(fourOhFour);
// app.use(errorHandler);
app.get("/akun", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});
exports.default = app;
//# sourceMappingURL=app.js.map