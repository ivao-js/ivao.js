import { AircraftTransponderType } from '../../types/data/index';
import { Client } from '../..';
export declare class aircraftTransponderTypes {
    private readonly client;
    constructor(client: Client);
    get(transponderId: string): Promise<AircraftTransponderType>;
    all(): Promise<AircraftTransponderType[]>;
}
