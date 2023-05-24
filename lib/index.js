"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userClient = exports.Client = void 0;
var index_1 = require("./utils/index");
var userClient;
exports.userClient = userClient;
var Client = /** @class */ (function () {
    function Client(options) {
        this.options = options;
        this.data = new index_1.data();
        exports.userClient = userClient = this;
    }
    ;
    return Client;
}());
exports.Client = Client;
