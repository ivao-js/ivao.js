"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subcenters = exports.navaids = exports.languages = exports.creators = exports.countries = exports.centers = exports.atcPositions = exports.airports = exports.airlines = exports.aircraft = void 0;
var aircraftManufacture_1 = require("./aircrafts/aircraftManufacture");
var aircraftEquipment_1 = require("./aircrafts/aircraftEquipment");
var aircraftTransponderTypes_1 = require("./aircrafts/aircraftTransponderTypes");
var aircrafts_1 = require("./aircrafts/aircrafts");
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
var airlines_1 = require("./airlines/airlines");
Object.defineProperty(exports, "airlines", { enumerable: true, get: function () { return airlines_1.airlines; } });
var airports_1 = require("./airports/airports");
Object.defineProperty(exports, "airports", { enumerable: true, get: function () { return airports_1.airports; } });
var atcPositions_1 = require("./atcPositions/atcPositions");
Object.defineProperty(exports, "atcPositions", { enumerable: true, get: function () { return atcPositions_1.atcPositions; } });
var centers_1 = require("./centers/centers");
Object.defineProperty(exports, "centers", { enumerable: true, get: function () { return centers_1.centers; } });
var countries_1 = require("./countries/countries");
Object.defineProperty(exports, "countries", { enumerable: true, get: function () { return countries_1.countries; } });
var creators_1 = require("./creators/creators");
Object.defineProperty(exports, "creators", { enumerable: true, get: function () { return creators_1.creators; } });
var languages_1 = require("./languages/languages");
Object.defineProperty(exports, "languages", { enumerable: true, get: function () { return languages_1.languages; } });
var navaids_1 = require("./navaids/navaids");
Object.defineProperty(exports, "navaids", { enumerable: true, get: function () { return navaids_1.navaids; } });
var subcenters_1 = require("./subcenters/subcenters");
Object.defineProperty(exports, "subcenters", { enumerable: true, get: function () { return subcenters_1.subcenters; } });
