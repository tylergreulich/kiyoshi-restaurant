"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var person_in_kitchen_jpg_1 = require("../../../assets/img/person-in-kitchen.jpg");
var fadeIn = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])));
exports.WelcomeJumbo = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  div {\n    z-index: 10;\n\n    strong {\n      font-size: 6rem;\n      text-transform: uppercase;\n      color: ", ";\n    }\n\n    span {\n      margin-right: 1rem;\n      z-index: 10;\n      font-size: 2.75rem;\n      color: ", ";\n    }\n  }\n\n  ", "\n\n  ", "\n\n  span {\n    z-index: 10;\n  }\n\n  #welcome {\n    animation: ", " 0.3s ease-in 0.1s;\n    animation-fill-mode: backwards;\n  }\n\n  #to {\n    animation: ", " 0.3s ease-in 0.4s;\n    animation-fill-mode: backwards;\n  }\n\n  #kiyoshi {\n    animation: ", " 0.3s ease-in 0.7s;\n    animation-fill-mode: backwards;\n  }\n\n  #teriyaki {\n    animation: ", " 0.3s ease-in 1s;\n    animation-fill-mode: backwards;\n  }\n\n  #and {\n    animation: ", " 0.3s ease-in 1.3s;\n    animation-fill-mode: backwards;\n  }\n\n  #sushi {\n    animation: ", " 0.3s ease-in 1.6s;\n    animation-fill-mode: backwards;\n  }\n\n  #arrow {\n    animation: ", " 0.3s ease-in 1.9s;\n    animation-fill-mode: backwards;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  div {\n    z-index: 10;\n\n    strong {\n      font-size: 6rem;\n      text-transform: uppercase;\n      color: ", ";\n    }\n\n    span {\n      margin-right: 1rem;\n      z-index: 10;\n      font-size: 2.75rem;\n      color: ", ";\n    }\n  }\n\n  ",
    "\n\n  ",
    "\n\n  span {\n    z-index: 10;\n  }\n\n  #welcome {\n    animation: ", " 0.3s ease-in 0.1s;\n    animation-fill-mode: backwards;\n  }\n\n  #to {\n    animation: ", " 0.3s ease-in 0.4s;\n    animation-fill-mode: backwards;\n  }\n\n  #kiyoshi {\n    animation: ", " 0.3s ease-in 0.7s;\n    animation-fill-mode: backwards;\n  }\n\n  #teriyaki {\n    animation: ", " 0.3s ease-in 1s;\n    animation-fill-mode: backwards;\n  }\n\n  #and {\n    animation: ", " 0.3s ease-in 1.3s;\n    animation-fill-mode: backwards;\n  }\n\n  #sushi {\n    animation: ", " 0.3s ease-in 1.6s;\n    animation-fill-mode: backwards;\n  }\n\n  #arrow {\n    animation: ", " 0.3s ease-in 1.9s;\n    animation-fill-mode: backwards;\n  }\n"])), person_in_kitchen_jpg_1["default"], function (_a) {
    var theme = _a.theme;
    return theme.main.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.main.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.lg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    div {\n      strong {\n        font-size: 4rem;\n      }\n\n      span {\n        font-size: 2.25rem\n      }\n    }\n  "], ["\n    div {\n      strong {\n        font-size: 4rem;\n      }\n\n      span {\n        font-size: 2.25rem\n      }\n    }\n  "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.sm(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    div {\n      strong {\n        font-size: 3rem;\n      }\n\n      span {\n        font-size: 2rem;\n      }\n    }\n  "], ["\n    div {\n      strong {\n        font-size: 3rem;\n      }\n\n      span {\n        font-size: 2rem;\n      }\n    }\n  "])));
}, fadeIn, fadeIn, fadeIn, fadeIn, fadeIn, fadeIn, fadeIn);
exports.JumboOverlay = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  opacity: 0.75;\n  position: absolute;\n"], ["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  opacity: 0.75;\n  position: absolute;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.black;
});
exports.Arrow = styled_components_1["default"].section(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  span {\n    position: absolute;\n    transform: translateY(300%);\n    top: 80%;\n    left: 50%;\n    width: 30px;\n    height: 50px;\n    margin-left: -15px;\n    border-radius: 50px;\n    box-sizing: border-box;\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n  }\n  span::before {\n    position: absolute;\n    top: 10px;\n    left: 50%;\n    content: '';\n    width: 6px;\n    height: 6px;\n    margin-left: -3px;\n    border-radius: 100%;\n    box-sizing: border-box;\n  }\n  span::after {\n    position: absolute;\n    bottom: -18px;\n    left: 50%;\n    width: 30px;\n    height: 30px;\n    content: '';\n    margin-left: -9px;\n    border-left: 5px solid ", ";\n    border-bottom: 5px solid ", ";\n    transform: rotate(-45deg);\n    box-sizing: border-box;\n\n    ", "\n\n    ", "\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  span {\n    position: absolute;\n    transform: translateY(300%);\n    top: 80%;\n    left: 50%;\n    width: 30px;\n    height: 50px;\n    margin-left: -15px;\n    border-radius: 50px;\n    box-sizing: border-box;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n    ",
    "\n  }\n  span::before {\n    position: absolute;\n    top: 10px;\n    left: 50%;\n    content: '';\n    width: 6px;\n    height: 6px;\n    margin-left: -3px;\n    border-radius: 100%;\n    box-sizing: border-box;\n  }\n  span::after {\n    position: absolute;\n    bottom: -18px;\n    left: 50%;\n    width: 30px;\n    height: 30px;\n    content: '';\n    margin-left: -9px;\n    border-left: 5px solid ", ";\n    border-bottom: 5px solid ", ";\n    transform: rotate(-45deg);\n    box-sizing: border-box;\n\n    ",
    "\n\n    ",
    "\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.xl(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      transform: translateY(200%);\n    "], ["\n      transform: translateY(200%);\n    "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.lg(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      transform: translateY(175%);\n    "], ["\n      transform: translateY(175%);\n    "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.md(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      transform: translateY(150%);\n    "], ["\n      transform: translateY(150%);\n    "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.sm(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      transform: translateY(75%);\n    "], ["\n      transform: translateY(75%);\n    "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.main.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.main.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.lg(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      width: 25px;\n      height: 25px;\n    "], ["\n      width: 25px;\n      height: 25px;\n    "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.md(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      width: 20px;\n      height: 20px;\n    "], ["\n      width: 20px;\n      height: 20px;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
