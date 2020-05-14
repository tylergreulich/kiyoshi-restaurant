"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_reveal_1 = require("react-reveal");
var AboutSection_1 = require("../../components/Home/AboutSection/AboutSection");
var FoodPreviewSection_1 = require("../../components/Home/FoodPreviewSection/FoodPreviewSection");
var Hero_1 = require("../../components/Home/Hero/Hero");
var foodCategories_actions_1 = require("../../store/foodCategories/foodCategories.actions");
var Home_styles_1 = require("./Home.styles");
exports.Home = function () {
    var dispatch = react_redux_1.useDispatch();
    react_1["default"].useEffect(function () {
        dispatch(foodCategories_actions_1.getFoodCategories());
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Hero_1.Hero, null),
        react_1["default"].createElement(Home_styles_1.ComponentDivider, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_reveal_1["default"], null,
                    react_1["default"].createElement("p", null, "COVID 19 | We are still here to serve you during these times!"),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", null, "We continue to practice the highest level of cleanliness and sanitation in all our restaurants to ensure the safety of our guests when picking up with us.")))),
        react_1["default"].createElement(AboutSection_1.AboutSection, null),
        react_1["default"].createElement(Home_styles_1.ComponentDivider, null,
            react_1["default"].createElement(react_reveal_1["default"], null,
                react_1["default"].createElement("p", null, "We have everything you need to kill your hunger"))),
        react_1["default"].createElement(FoodPreviewSection_1.FoodPreviewSection, null)));
};
