"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const your_controller_1 = require("../controllers/your-controller");
const router = express_1.default.Router();
router.get("/hello", your_controller_1.yourController);
exports.default = router;
//# sourceMappingURL=route.js.map