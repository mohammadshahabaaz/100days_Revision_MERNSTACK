"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponseHandler = exports.successResponseHandler = void 0;
const successResponseHandler = (res, message, data) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
};
exports.successResponseHandler = successResponseHandler;
const errorResponseHandler = (res, message) => {
    return res.status(500).json({
        success: false,
        message
    });
};
exports.errorResponseHandler = errorResponseHandler;
