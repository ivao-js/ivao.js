import { Aircraft, AircraftVariant } from '../../../types/data/index';
export declare class aircrafts {
    constructor();
    get(icao: string): Promise<Aircraft>;
    all(): Promise<Aircraft[]>;
    variants(icao: string): Promise<AircraftVariant[]>;
}
