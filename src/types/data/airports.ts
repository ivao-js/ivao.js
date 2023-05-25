export interface Airport {
    icao: string;
    iata: string;
    name: string;
    city: string;
    countryId: string;
    latitude: number;
    longitude: number;
    military: boolean;
    faaCode: string;
    atcCallsign: string;
    state: string;
    centerId: string;
    firId: string;
    elevation: number;
    magnetic: string;
    transitionAltitude: number;
    web: string;
}

export interface BaseAirport {
    icao: string;
    iata: string;
    name: string;
    city: string;
    countryId: string;
    latitude: number;
    longitude: number;
    military: boolean;
}

export interface BasATCPosition {
    id: number;
    airportIcao: string;
    atcCallsign: string;
    middleIdentifier: string;
    position: string;
    composePosition: string;
}

export interface Notam {
    id: number;
    name: string;
    specialAreaId: string;
    startTime: number;
    endTime: number;
    description: string;
    military: boolean;
    centers: string[];
    airports: string[];
    regionMap: object[];
    regionMapPolygon: any[];
}

export interface Runway {
    id: number;
    airportIcao: string;
}

export interface Squawk {
    length: string;
    bearing: string;
    latitude: number;
    longitude: number;
    elevation: number;
    width: number;
}

export interface SquawkGenerated {
    originMatch: string;
    destinationMatch: string;
    code: string;
}

export interface Metar {
    airportIcao: string;
    metar: string;
    updatedAt: string;
}

export interface Taf {
    airportIcao: string;
    taf: string;
    updatedAt: string;
}

export interface ShortTaf {
    airportIcao: string;
    shortTaf: string;
    updatedAt: string;
}