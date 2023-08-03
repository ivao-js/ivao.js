import {
    AircraftManufacture as AircraftManufactureDto
} from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class aircraftManufacture {
    constructor() {};

    async get(id: number): Promise<AircraftManufactureDto> {
        return await apiRequest<AircraftManufactureDto>(`v2/aircrafts/manufacturers/${id}`, null, 'GET');
    }

    async all(): Promise<AircraftManufactureDto[]> {
        return await apiRequest<AircraftManufactureDto[]>(`v2/aircrafts/manufacturers`, [], 'GET');
    }
}