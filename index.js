"use strict";
exports.__esModule = true;
function default_1(cookie) {
    if (cookie === void 0) { cookie = ''; }
    var parsedCookie = new Map();
    cookie.split('; ').forEach(function (value) {
        var splited = value.split("=");
        parsedCookie.set(splited[0], splited[1]);
    });
    return parsedCookie;
}
exports["default"] = default_1;
