"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var MenuItem_1 = require("../MenuItem/MenuItem");
var MenuItems_styles_1 = require("./MenuItems.styles");
exports.MenuItems = function () {
    var _a = react_1["default"].useState(null), menuItems = _a[0], setMenuItems = _a[1];
    react_1["default"].useEffect(function () {
        axios_1["default"]
            .get('https://kiyoshi-restaurant.xyz/api/menu')
            .then(function (_a) {
            var data = _a.data;
            return setMenuItems(data);
        })["catch"](function (error) { return console.error(error); });
    }, []);
    return (react_1["default"].createElement(MenuItems_styles_1.MenuWrapper, null,
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement(MenuItems_styles_1.MenuContainer, { className: "\n        col-md-10 offset-md-1\n        offset-lg-2 col-lg-8\n        col-sm-12\n       " }, menuItems ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Starters", menuItems: menuItems }),
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Sushi Burritos", menuItems: menuItems }),
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Teriyaki Bowls", menuItems: menuItems }),
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Teriyaki Veggie Bowls", menuItems: menuItems }),
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Noodles", menuItems: menuItems }),
                react_1["default"].createElement(MenuItem_1.MenuItem, { myCategoryTitle: "Sushi Rolls", menuItems: menuItems }))) : (react_1["default"].createElement("div", { style: { height: '100vh' } }))))));
};
