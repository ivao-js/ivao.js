import { Aircraft, AircraftVariant } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class aircrafts {
    constructor() {};

    async get(icao: string): Promise<Aircraft> {
        return await apiRequest<Aircraft>(`v2/aircrafts/${icao}`, null, 'GET');
    }

    async all(): Promise<Aircraft[]> {
        return await apiRequest<Aircraft[]>(`v2/aircrafts/all`, [], 'GET');
    }

    async variants(icao: string): Promise<AircraftVariant[]> {
        return await apiRequest<AircraftVariant[]>(`v2/aircrafts/${icao}/variants`, [], 'GET');
    }
}