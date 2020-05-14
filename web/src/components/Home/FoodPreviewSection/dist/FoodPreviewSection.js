"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_reveal_1 = require("react-reveal");
var react_router_dom_1 = require("react-router-dom");
var FoodPreviewSection_styles_1 = require("./FoodPreviewSection.styles");
exports.FoodPreviewSection = function () {
    var foodCategoryItems = react_redux_1.useSelector(function (state) { return state.foodCategories; }).foodCategoryItems;
    return (react_1["default"].createElement(FoodPreviewSection_styles_1.FoodPreviewWrapper, null,
        react_1["default"].createElement(FoodPreviewSection_styles_1.FoodPreviewContainer, null,
            react_1["default"].createElement(FoodPreviewSection_styles_1.FoodSlider, null,
                react_1["default"].createElement(FoodPreviewSection_styles_1.SlidingSystem, null, foodCategoryItems &&
                    foodCategoryItems.map(function (_a) {
                        var id = _a.id, title = _a.title, description = _a.description, image_url = _a.image_url;
                        return (react_1["default"].createElement(FoodPreviewSection_styles_1.Slide, { key: id },
                            react_1["default"].createElement(FoodPreviewSection_styles_1.Content, null,
                                react_1["default"].createElement(react_reveal_1["default"], null,
                                    react_1["default"].createElement(FoodPreviewSection_styles_1.FoodContainer, null,
                                        react_1["default"].createElement(FoodPreviewSection_styles_1.FoodTitle, null, title),
                                        react_1["default"].createElement(FoodPreviewSection_styles_1.FoodDescription, null, description),
                                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/menu" },
                                            react_1["default"].createElement(FoodPreviewSection_styles_1.FoodButton, null, "View More"))),
                                    react_1["default"].createElement(FoodPreviewSection_styles_1.FoodImageWrapper, null,
                                        react_1["default"].createElement("img", { src: "" + image_url, style: {
                                                width: '95%',
                                                maxWidth: '250px'
                                            }, alt: "" + image_url }))))));
                    }))))));
};
