"use strict";
var _a;
exports.__esModule = true;
exports.useSession = exports.signUp = exports.signIn = exports.authClient = void 0;
var react_1 = require("better-auth/react");
exports.authClient = react_1.createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
});
exports.signIn = (_a = react_1.createAuthClient(), _a.signIn), exports.signUp = _a.signUp, exports.useSession = _a.useSession;
