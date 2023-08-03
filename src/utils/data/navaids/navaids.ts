import { Navaid } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class navaids {
    constructor() {};

    async get(navaid: number, type: 'VOR' | 'FIX' | 'NDB'): Promise<Navaid> {
        return await apiRequest<Navaid>(`v2/navaids/${type}/${navaid}`, null, 'GET');
    }
}