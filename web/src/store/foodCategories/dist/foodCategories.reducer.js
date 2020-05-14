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
var foodCategories_types_1 = require("./foodCategories.types");
var initialState = {
    foodCategoryItems: null
};
exports.foodCategoriesReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    switch (action.type) {
        case foodCategories_types_1.GET_FOOD_CATEGORIES:
            var updatedFoodCategories = action.payload.map(function (foodCategory) {
                var convertedDate = convertMySQLDate_1.convertMySQLDate(foodCategory.created_at).convertedDate;
                return __assign(__assign({}, foodCategory), { created_at: convertedDate });
            });
            return __assign(__assign({}, state), { foodCategoryItems: updatedFoodCategories });
        case foodCategories_types_1.CREATE_FOOD_CATEGORY:
            return __assign(__assign({}, state), { foodCategoryItems: __spreadArrays([action.payload], state.foodCategoryItems) });
        case foodCategories_types_1.UPDATE_FOOD_CATEGORY:
            var _b = action.payload, idToUpdate_1 = _b.id, title_1 = _b.title, description_1 = _b.description, image_url_1 = _b.image_url;
            var newFoodCategories = (_a = state.foodCategoryItems) === null || _a === void 0 ? void 0 : _a.map(function (foodCategoryItem) {
                if (foodCategoryItem.id === idToUpdate_1) {
                    return __assign(__assign({}, foodCategoryItem), { title: title_1,
                        description: description_1,
                        image_url: image_url_1 });
                }
                return foodCategoryItem;
            });
            return __assign(__assign({}, state), { foodCategoryItems: newFoodCategories });
        case foodCategories_types_1.DELETE_FOOD_CATEGORY:
            return __assign(__assign({}, state), { foodCategoryItems: state.foodCategoryItems.filter(function (foodCategoryItem) { return foodCategoryItem.id !== action.payload; }) });
        default:
            return __assign({}, state);
    }
};
