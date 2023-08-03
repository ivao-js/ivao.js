import { Antenna, BaseSubcenter, Subcenter } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class subcenters {
    constructor() {};

    /**
     * @example atcCallsign : LFBB -> Bordeaux Control
     */
    async getSubcenters(id: number, atcCallsign: string): Promise<BaseSubcenter> {
        return await apiRequest<BaseSubcenter>(`v2/centers/${id}/subcenters`, null, 'GET', { atcCallsign });
    }

    async get(id: number): Promise<Subcenter> {
        return await apiRequest<Subcenter>(`v2/subcenters/${id}`, null, 'GET');
    }

    async getAll(mapType: 'regionMap' | 'regionMapPolygon'): Promise<Subcenter> {
        return await apiRequest<Subcenter>(`v2/subcenters/all`, null, 'GET', { ...(mapType ? { mapType } : {}) });
    }

    async getAntennas(subCenterId: number): Promise<Antenna> {
        return await apiRequest<Antenna>(`v2/subcenters/${subCenterId}/antennas`, null, 'GET');
    }
}