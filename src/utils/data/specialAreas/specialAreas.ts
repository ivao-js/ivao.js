import { Notam, SpecialAreas } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class specialAreas {
    constructor() {};

    async all(now: boolean, mapType?: 'regionMap' | 'regionMapPolygon'): Promise<Notam[]> {
        return await apiRequest<Notam[]>(`v2/specialAreas/all`, [], 'GET', { ...(now ? { now } : {}), ...(mapType ? { mapType } : {}) });
    }

    async get(notamId: number): Promise<SpecialAreas> {
        return await apiRequest<SpecialAreas>(`v2/specialAreas/${notamId}`, null, 'GET');
    }
}