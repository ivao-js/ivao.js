import { AircraftTransponderType } from '../../types/data/index';
export declare class aircraftTransponderTypes {
    constructor();
    get(transponderId: string): Promise<AircraftTransponderType>;
    all(): Promise<AircraftTransponderType[]>;
}
