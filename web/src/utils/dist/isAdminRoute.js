"use strict";
exports.__esModule = true;
exports.isAdminRoute = function (location) {
    return (location.pathname === '/admin/food-categories' ||
        location.pathname === '/admin/food-items');
};
