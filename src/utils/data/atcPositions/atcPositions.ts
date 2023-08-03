import { ATCPosition, Antenna, Position } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class atcPositions {
    constructor() {};

    async get(callsign: string): Promise<ATCPosition> {
        return await apiRequest<ATCPosition>(`v2/ATCPositions/${callsign}`, null, 'GET');
    }

    async all(): Promise<ATCPosition[]> {
        return await apiRequest<ATCPosition[]>(`v2/ATCPositions/all`, [], 'GET');
    }

    async antennas(callsign: string): Promise<Antenna[]> {
        return await apiRequest<Antenna[]>(`v2/ATCPositions/${callsign}/antennas`, [], 'GET');
    }

    async search(
        startsWith?: string,
        positionType?:
            'CTR' |
            'APP' |
            'DEP' |
            'TWR' |
            'GND' |
            'DEL' |
            'ATIS',
        icao?: string,
        limit?: number,
        composePositionList?: boolean
    ): Promise<Position[]> {
        return await apiRequest<Position[]>(`v2/positions/search`, [], 'POST', { startsWith, positionType, icao, limit, composePositionList });
    }
}