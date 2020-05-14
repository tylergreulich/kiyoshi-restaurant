"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var Hero_styles_1 = require("./Hero.styles");
exports.Hero = function () {
    return (react_1["default"].createElement(Hero_styles_1.WelcomeJumbo, null,
        react_1["default"].createElement(Hero_styles_1.JumboOverlay, null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { id: "welcome" }, "Welcome"),
            react_1["default"].createElement("span", { id: "to" }, "To")),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("strong", { id: "kiyoshi" }, "Kiyoshi's")),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { id: "teriyaki" }, "Teriyaki"),
            react_1["default"].createElement("span", { id: "and" }, "and"),
            react_1["default"].createElement("span", { id: "sushi" }, "Sushi")),
        react_1["default"].createElement(Hero_styles_1.Arrow, { id: "arrow", onClick: function () { return react_scroll_1.animateScroll.scrollTo(900); } },
            react_1["default"].createElement("span", null))));
};
