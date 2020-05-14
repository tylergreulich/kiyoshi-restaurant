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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var convertMySQLDate_1 = require("./../../utils/convertMySQLDate");
var foodItems_types_1 = require("./foodItems.types");
var initialState = {
    foodItems: null
};
exports.foodItemsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    switch (action.type) {
        case foodItems_types_1.GET_FOOD_ITEMS:
            var updatedFoodItems = action.payload.map(function (foodItem) {
                var decimalPointToRoundTo = 2;
                var updatedPrice = parseFloat(foodItem.price.toFixed(decimalPointToRoundTo));
                var convertedDate = convertMySQLDate_1.convertMySQLDate(foodItem.created_at).convertedDate;
                return __assign(__assign({}, foodItem), { price: updatedPrice, created_at: convertedDate });
            });
            return __assign(__assign({}, state), { foodItems: updatedFoodItems });
        case foodItems_types_1.CREATE_FOOD_ITEM:
            return __assign(__assign({}, state), { foodItems: __spreadArrays([action.payload], state.foodItems) });
        case foodItems_types_1.UPDATE_FOOD_ITEM:
            var _b = action.payload, idToUpdate_1 = _b.id, title_1 = _b.title, description_1 = _b.description, image_url_1 = _b.image_url, price_1 = _b.price;
            var newFoodItems = (_a = state.foodItems) === null || _a === void 0 ? void 0 : _a.map(function (foodItem) {
                if (foodItem.id === idToUpdate_1) {
                    return __assign(__assign({}, foodItem), { title: title_1,
                        description: description_1,
                        image_url: image_url_1,
                        price: price_1 });
                }
                return foodItem;
            });
            return __assign(__assign({}, state), { foodItems: newFoodItems });
        case foodItems_types_1.DELETE_FOOD_ITEM:
            return __assign(__assign({}, state), { foodItems: state.foodItems.filter(function (foodItem) { return foodItem.id !== action.payload; }) });
        default:
            return __assign({}, state);
    }
};
