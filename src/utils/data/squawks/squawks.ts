import { Squawk } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class squawks {
    constructor() {};

    async get(squawkId: number): Promise<Squawk> {
        return await apiRequest<Squawk>(`v2/squawks/${squawkId}`, null, 'GET');
    }
}