import { AircraftManufacture as AircraftManufactureDto } from '../../types/data/index';
import { Client } from '../..';
export declare class aircraftManufacture {
    private readonly client;
    constructor(client: Client);
    get(id: number): Promise<AircraftManufactureDto>;
    all(): Promise<AircraftManufactureDto[]>;
}
