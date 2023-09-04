import { aircraft, airlines, airports, atcPositions, centers, countries, languages, navaids, subcenters, runways, sectors, servers, simulators, simulatorVersions, softwares, specialAreas, squawks, virtualAirlines, creators, divisions as dataDivisions, motds } from './data/index';
import { divisions as coreDivisions } from './core/index';
export declare class data {
    constructor();
    aircraft: aircraft;
    airlines: airlines;
    airports: airports;
    atcPositions: atcPositions;
    centers: centers;
    countries: countries;
    languages: languages;
    navaids: navaids;
    subcenters: subcenters;
    runways: runways;
    sectors: sectors;
    servers: servers;
    simulators: simulators;
    simulatorVersions: simulatorVersions;
    softwares: softwares;
    specialAreas: specialAreas;
    squawks: squawks;
    virtualAirlines: virtualAirlines;
    creators: creators;
    divisions: dataDivisions;
    motds: motds;
}
export declare class core {
    constructor();
    divisions: coreDivisions;
}
