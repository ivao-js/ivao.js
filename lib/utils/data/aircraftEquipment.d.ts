import { AircraftEquipment } from '../../types/data/index';
export declare class aircraftEquipment {
    constructor();
    get(equipmentId: string): Promise<AircraftEquipment>;
    all(): Promise<AircraftEquipment[]>;
}
