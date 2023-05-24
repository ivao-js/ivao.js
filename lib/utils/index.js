"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
var index_1 = require("./data/index");
var data = /** @class */ (function () {
    function data() {
        this.aircraft = new index_1.aircraft();
        this.airlines = new index_1.airlines();
    }
    ;
    return data;
}());
exports.data = data;
