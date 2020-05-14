"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var browserHistory = require("history");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var GuestRoute_1 = require("./components/Auth/GuestRoute/GuestRoute");
var PrivateRoute_1 = require("./components/Auth/PrivateRoute/PrivateRoute");
var Footer_1 = require("./components/Footer/Footer");
var Navigation_1 = require("./components/Navigation/Navigation");
var ScrollIntoView_1 = require("./utils/ScrollIntoView");
var About_1 = require("./views/About/About");
var FoodCategories_1 = require("./views/FoodCategories");
var FoodItems_1 = require("./views/FoodItems");
var Home_1 = require("./views/Home/Home");
var Login_1 = require("./views/Login");
var Menu_1 = require("./views/Menu");
var Offers_1 = require("./views/Offers");
exports.history = browserHistory.createBrowserHistory();
var AppLayout = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  height: 100vh;\n  font-family: 'Montserrat';\n"], ["\n  display: grid;\n  width: 100%;\n  height: 100vh;\n  font-family: 'Montserrat';\n"])));
var ContentSection = styled_components_1["default"].section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.white;
});
exports.Routes = function () {
    return (react_1["default"].createElement(react_router_dom_1.Router, { history: exports.history },
        react_1["default"].createElement(AppLayout, null,
            react_1["default"].createElement(Navigation_1.Navigation, null),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.Home }),
            react_1["default"].createElement(ContentSection, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/about", exact: true, component: About_1.About }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/offers", exact: true, component: Offers_1.Offers }),
                react_1["default"].createElement(ScrollIntoView_1["default"], null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/menu", exact: true, component: Menu_1.Menu })),
                react_1["default"].createElement(GuestRoute_1["default"], { path: "/login", exact: true, component: Login_1.Login }),
                react_1["default"].createElement(PrivateRoute_1["default"], { path: "/admin/food-categories", exact: true, component: FoodCategories_1.FoodCategories }),
                react_1["default"].createElement(PrivateRoute_1["default"], { path: "/admin/food-items", exact: true, component: FoodItems_1.FoodItems })),
            react_1["default"].createElement(Footer_1.Footer, null))));
};
var templateObject_1, templateObject_2;
