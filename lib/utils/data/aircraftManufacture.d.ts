import { AircraftManufacture as AircraftManufactureDto } from '../../types/data/index';
export declare class aircraftManufacture {
    constructor();
    get(id: number): Promise<AircraftManufactureDto>;
    all(): Promise<AircraftManufactureDto[]>;
}
