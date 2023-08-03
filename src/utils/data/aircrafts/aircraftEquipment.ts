import { AircraftEquipment } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class aircraftEquipment {
    constructor() {};

    async get(equipmentId: string): Promise<AircraftEquipment> {
        return await apiRequest<AircraftEquipment>(`v2/aircrafts/equipments/${equipmentId}`, null, 'GET');
    }

    async all(): Promise<AircraftEquipment[]> {
        return await apiRequest<AircraftEquipment[]>(`v2/aircrafts/equipments`, [], 'GET');
    }
}