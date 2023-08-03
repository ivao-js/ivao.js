import { BaseVirtualAirline, MixedVirtualAirline, VirtualAirline } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class virtualAirlines {
    constructor() {};

    async all(): Promise<MixedVirtualAirline[]> {
        return await apiRequest<MixedVirtualAirline[]>(`v2/virtualAirlines/all`, [], 'GET');
    }

    async getAllByCallsign(airlineIcao: string): Promise<BaseVirtualAirline[]> {
        return await apiRequest<BaseVirtualAirline[]>(`v2/airlines/${airlineIcao}/virtualAirlines`, [], 'GET');
    }
    
    async get(id: string): Promise<VirtualAirline> {
        return await apiRequest<VirtualAirline>(`v2/virtualAirlines/${id}`, null, 'GET');
    }

    async getMainLogo(virtualAirlineId: string): Promise<Buffer> {
        return await apiRequest<Buffer>(`v2/virtualAirlines/${virtualAirlineId}/mainLogo`, null, 'GET');
    }

    async getOnlineLogo(virtualAirlineId: string): Promise<Buffer> {
        return await apiRequest<Buffer>(`v2/virtualAirlines/${virtualAirlineId}/onlineLogo`, null, 'GET');
    }
}