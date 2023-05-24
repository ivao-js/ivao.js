import { Aircraft, AircraftVariant } from '../../types/data/index';
import { Client } from '../..';
export declare class aircrafts {
    private readonly client;
    constructor(client: Client);
    get(icao: string): Promise<Aircraft>;
    all(): Promise<Aircraft[]>;
    variants(icao: string): Promise<AircraftVariant[]>;
}
