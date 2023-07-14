"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
var index_1 = require("./data/index");
var data = /** @class */ (function () {
    function data() {
        this.aircraft = new index_1.aircraft();
        this.airlines = new index_1.airlines();
        this.airports = new index_1.airports();
        this.atcPositions = new index_1.atcPositions();
        this.centers = new index_1.centers();
        this.countries = new index_1.countries();
        this.languages = new index_1.languages();
        this.navaids = new index_1.navaids();
        this.subcenters = new index_1.subcenters();
    }
    ;
    return data;
}());
exports.data = data;
