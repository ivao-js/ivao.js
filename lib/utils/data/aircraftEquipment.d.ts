import { AircraftEquipment } from '../../types/data/index';
import { Client } from '../..';
export declare class aircraftEquipment {
    private readonly client;
    constructor(client: Client);
    get(equipmentId: string): Promise<AircraftEquipment>;
    all(): Promise<AircraftEquipment[]>;
}
