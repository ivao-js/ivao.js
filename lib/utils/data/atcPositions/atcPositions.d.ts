import { ATCPosition, Antenna, Position } from '../../../types/data/index';
export declare class atcPositions {
    constructor();
    get(callsign: string): Promise<ATCPosition>;
    all(): Promise<ATCPosition[]>;
    antennas(callsign: string): Promise<Antenna[]>;
    search(startsWith?: string, positionType?: 'CTR' | 'APP' | 'DEP' | 'TWR' | 'GND' | 'DEL' | 'ATIS', icao?: string, limit?: number, composePositionList?: boolean): Promise<Position[]>;
}
