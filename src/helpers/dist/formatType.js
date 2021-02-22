"use strict";
exports.__esModule = true;
var formatType = function (techno) {
    var color;
    switch (techno) {
        case 'Html':
            color = 'indigo lighten-5';
            break;
        default:
            color = 'indigo lighten-5';
            break;
    }
    return "chip " + color;
};
exports["default"] = formatType;
