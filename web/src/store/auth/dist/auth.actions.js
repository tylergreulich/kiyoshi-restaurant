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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var js_cookie_1 = require("js-cookie");
var Routes_1 = require("../../Routes");
var auth_types_1 = require("./auth.types");
exports.login = function (payload) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, hour, days, expires;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].post('http://kiyoshi-restaurant.xyz/api/auth/login', payload)["catch"](function (error) { return console.error(error); })];
            case 1:
                response = _a.sent();
                if (response) {
                    hour = 3600000;
                    days = 7;
                    expires = hour * 24 * days * 168;
                    js_cookie_1["default"].set('token', response.data.access_token, {
                        expires: expires
                    });
                    dispatch({
                        type: auth_types_1.SET_LOGIN,
                        payload: response.data.user
                    });
                    dispatch({ type: auth_types_1.SET_IS_LOGGED_IN, payload: true });
                    Routes_1.history.push('/admin/food-categories');
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.logout = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].post('http://kiyoshi-restaurant.xyz/api/auth/logout')["catch"](function (error) { return console.error(error); })];
            case 1:
                response = _a.sent();
                if (response) {
                    js_cookie_1["default"].remove('token');
                    dispatch({ type: auth_types_1.SET_LOGOUT });
                    dispatch({ type: auth_types_1.SET_IS_LOGGED_IN, payload: false });
                    Routes_1.history.push('/');
                }
                return [2 /*return*/];
        }
    });
}); }; };
