import {
    aircraft,
    airlines,
    airports,
    atcPositions,
    centers,
    countries,
    languages,
    navaids,
    subcenters,
    runways,
    sectors,
    servers,
    simulators,
    simulatorVersions,
    softwares
} from './data/index';

export class data {
    constructor() {};

    public aircraft = new aircraft();
    public airlines = new airlines();
    public airports = new airports();
    public atcPositions = new atcPositions();
    public centers = new centers();
    public countries = new countries();
    public languages = new languages();
    public navaids = new navaids();
    public subcenters = new subcenters();
    public runways = new runways();
    public sectors = new sectors();
    public servers = new servers();
    public simulators = new simulators();
    public simulatorVersions = new simulatorVersions();
    public softwares = new softwares();
}