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
        this.runways = new index_1.runways();
        this.sectors = new index_1.sectors();
        this.servers = new index_1.servers();
        this.simulators = new index_1.simulators();
        this.simulatorVersions = new index_1.simulatorVersions();
        this.softwares = new index_1.softwares();
        this.specialAreas = new index_1.specialAreas();
        this.squawks = new index_1.squawks();
        this.virtualAirlines = new index_1.virtualAirlines();
        this.motds = new index_1.motds();
    }
    ;
    return data;
}());
exports.data = data;
