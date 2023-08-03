import { apiRequest } from '../../apiRequest';

interface RunwayDto {
    id: number;
    airportIcao: string;
    length: string;
    bearing: string;
    latitude: number;
    longitude: number;
    elevation: number;
    width: number;
}

export class runways {
    constructor() {}; 

    async get(id: string): Promise<RunwayDto> {
        return await apiRequest<RunwayDto>(`v2/runways/${id}`, null, 'GET');
    }
}