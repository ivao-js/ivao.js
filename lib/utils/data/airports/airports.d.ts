import { BasATCPosition, Airport, Metar, Notam, Runway, ShortTaf, Squawk, SquawkGenerated, Taf } from '../../../types/data';
export declare class airports {
    constructor();
    getAirport(icao: string): Promise<Airport>;
    allAirports(): Promise<Airport[]>;
    positions(icao: string): Promise<BasATCPosition[]>;
    notams(icao: string): Promise<Notam[]>;
    runways(icao: string): Promise<Runway[]>;
    getSquawks(icao: string): Promise<Squawk[]>;
    genSquawk(icao: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated>;
    allMetar(): Promise<Metar[]>;
    getMetar(icao: string): Promise<Metar>;
    allTaf(type: 'short' | 'normal'): Promise<ShortTaf[] | Taf[]>;
    taf(icao: string, type: 'short' | 'normal'): Promise<ShortTaf | Taf>;
}
