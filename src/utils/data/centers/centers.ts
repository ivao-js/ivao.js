import { BaseSubcenter, Center, Notam, SpecialAreas, Squawk, SquawkGenerated } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class centers {
    constructor() {};

    /**
     * @param centerId
     * @description Allows you to obtain a center using an id
     * @returns 
     */
    async get(centerId: string): Promise<Center> {
        return await apiRequest<Center>(`v2/centers/${centerId}`, null, 'GET');
    }

    async getAllNotams(centerId: string): Promise<Notam[]> {
        return await apiRequest<Notam[]>(`v2/centers/${centerId}/notams/all`, [], 'GET');
    }

    async getAllSpecialAreas(centerId: string): Promise<SpecialAreas> {
        return await apiRequest<SpecialAreas>(`v2/centers/${centerId}/specialAreas/all`, null, 'GET');
    }

    async getSquawks(centerId: string): Promise<Squawk[]> {
        return await apiRequest<Squawk[]>(`v2/centers/${centerId}/squawks`, [], 'GET');
    }

    async genSquawk(centerId: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated> {
        return await apiRequest<SquawkGenerated>(`v2/centers/${centerId}/squawks/generate`, null, 'POST', {}, { originIcao, destinationIcao, flightRules, military });
    }

    async getSubcenters(centerId: string): Promise<BaseSubcenter[]> {
        return await apiRequest<BaseSubcenter[]>(`v2/centers/${centerId}/subcenters`, [], 'GET');
    }
}