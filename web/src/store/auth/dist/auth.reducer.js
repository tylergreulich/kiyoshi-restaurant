"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var auth_types_1 = require("./auth.types");
var initialState = {
    user: null,
    loggedIn: false
};
exports.authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case auth_types_1.SET_LOGIN:
            return __assign(__assign({}, state), { user: action.payload });
        case auth_types_1.SET_LOGOUT:
            return __assign(__assign({}, state), { user: null });
        case auth_types_1.SET_IS_LOGGED_IN:
            console.log(action.payload);
            return __assign(__assign({}, state), { loggedIn: action.payload });
        default:
            return state;
    }
};
