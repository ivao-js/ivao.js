"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airlines = exports.aircraft = void 0;
var aircraftManufacture_1 = require("./aircraftManufacture");
var aircraftEquipment_1 = require("./aircraftEquipment");
var aircraftTransponderTypes_1 = require("./aircraftTransponderTypes");
var aircrafts_1 = require("./aircrafts");
var aircraft = /** @class */ (function () {
    function aircraft() {
        this.aircraftManufacture = new aircraftManufacture_1.aircraftManufacture();
        this.aircraftEquipment = new aircraftEquipment_1.aircraftEquipment();
        this.aircraftTransponderTypes = new aircraftTransponderTypes_1.aircraftTransponderTypes();
        this.aircrafts = new aircrafts_1.aircrafts();
    }
    ;
    return aircraft;
}());
exports.aircraft = aircraft;
var airlines_1 = require("./airlines");
Object.defineProperty(exports, "airlines", { enumerable: true, get: function () { return airlines_1.airlines; } });
