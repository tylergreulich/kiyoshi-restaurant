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
var axios_1 = require("axios");
var js_cookie_1 = require("js-cookie");
var jsonwebtoken_1 = require("jsonwebtoken");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var styled_components_1 = require("styled-components");
require("./index.css");
var mediaQueryBreakpoints_1 = require("./mediaQueryBreakpoints");
var Routes_1 = require("./Routes");
var auth_types_1 = require("./store/auth/auth.types");
var store_1 = require("./store/store");
var theme_1 = require("./theme");
var token = js_cookie_1["default"].get('token');
if (token) {
    jsonwebtoken_1["default"].verify(token, process.env.REACT_APP_JWT_SECRET, function (error, decoded) {
        if (error) {
            console.log(error);
            js_cookie_1["default"].remove('token');
            token = undefined;
        }
        else {
            if (decoded.iss !== 'http://kiyoshi-restaurant.xyz/api/auth/login') {
                js_cookie_1["default"].remove('token');
                token = undefined;
            }
        }
    });
}
var renderApp = function () {
    react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
            react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: __assign(__assign({}, theme_1.theme), mediaQueryBreakpoints_1["default"]) },
                react_1["default"].createElement(Routes_1.Routes, null)))), document.getElementById('root'));
};
if (token) {
    axios_1["default"].defaults.headers.common['Authorization'] = "Bearer " + token;
    axios_1["default"].post('http://kiyoshi-restaurant.xyz/api/auth/me')
        .then(function (_a) {
        var data = _a.data;
        store_1.store.dispatch({ type: auth_types_1.SET_LOGIN, payload: data });
        renderApp();
    })["catch"](function (error) { return console.error(error); });
}
else {
    renderApp();
}
