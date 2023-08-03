import { AircraftTransponderType } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class aircraftTransponderTypes {
    constructor() {};

    async get(transponderId: string): Promise<AircraftTransponderType> {
        return await apiRequest<AircraftTransponderType>(`v2/aircrafts/transponderTypes/${transponderId}`, null, 'GET');
    }

    async all(): Promise<AircraftTransponderType[]> {
        return await apiRequest<AircraftTransponderType[]>(`v2/aircrafts/transponderTypes`, [], 'GET');
    }
}