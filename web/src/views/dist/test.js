"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
exports.Test = function () {
    react_1["default"].useEffect(function () {
        axios_1["default"].get('https://kiyoshi-restaurant.xyz/api/menu')
            .then(function (res) { return console.log(res); })["catch"](function (err) { return console.error(err); });
    });
    return react_1["default"].createElement("div", null, "A component");
};
