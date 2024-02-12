"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
/**
 * JSON 404 response
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const notFoundMiddleware = (req, res) => {
    const PATH = req.path;
    return res
        .status(404)
        .json({ code: 404, path: PATH, error: "Route not found !!!" });
};
exports.notFoundMiddleware = notFoundMiddleware;
//# sourceMappingURL=not-found.js.map