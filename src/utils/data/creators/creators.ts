import { Creator } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class creators {
    constructor() {};

    async get(vid: string): Promise<Creator> {
        return await apiRequest<Creator>(`v2/creators/${vid}`, null, 'GET');
    }

    async all(): Promise<Creator[]> {
        return await apiRequest<Creator[]>(`v2/creators/all`, [], 'GET');
    }
}