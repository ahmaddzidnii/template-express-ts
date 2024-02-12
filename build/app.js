"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const route_1 = __importDefault(require("./routes/route"));
const not_found_1 = require("./middleware/not-found");
const app = (0, express_1.default)();
app.set("trust proxy", true);
const keyGenerator = function keyGenerator(request, _response) {
    if (!request.ip) {
        console.error("Warning: request.ip is missing!");
        return request.socket.remoteAddress;
    }
    return request.ip.replace(/:\d+[^:]*$/, "");
};
const rateLimitConfig = (0, express_rate_limit_1.rateLimit)({
    windowMs: 20 * 1000,
    limit: 15,
    legacyHeaders: true,
    standardHeaders: "draft-7",
    keyGenerator,
});
app.use(rateLimitConfig);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("tiny"));
// root route
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "Hello World!",
        NODE_ENV: process.env.NODE_ENV,
    });
}));
// Apply routes before error handling
app.use("/v1", route_1.default);
// Apply error handling last
app.use(not_found_1.notFoundMiddleware);
// app.use(errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map