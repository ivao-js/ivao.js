import { Servers } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class servers {
    constructor() {}; 

    async all(type: string, hostname?: string, isActive?: boolean): Promise<Servers[]> {
        return await apiRequest<Servers[]>(`v2/servers/all`, [], 'GET', { hostname, isActive, type });
    }

    async get(serverId: string): Promise<Servers> {
        return await apiRequest<Servers>(`v2/servers/${serverId}`, null, 'GET');
    }
}