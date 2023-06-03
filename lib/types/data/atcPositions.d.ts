import { BaseAirport, BasATCPosition } from './airports';
export interface ATCPosition extends BasATCPosition {
    military: boolean;
    frequency: number;
    regionMap: any[];
    regionMapPolygon: any[];
    airport: BaseAirport;
}
export interface Antenna {
    id: number;
    name: string;
    location: string;
    lat: number;
    lng: number;
    elevation: number;
    transmittingPower: number;
    ppm: number;
}
export interface Position {
    id: number;
    airportId: string;
    centerId: string;
    atcCallsign: string;
    military: boolean;
    position: string;
    middleIdentifier: string;
    frequency: number;
    composePosition: string;
}
