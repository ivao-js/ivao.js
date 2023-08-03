import { Notam } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class divisions {
    constructor() {};

    async getNotams(divisionId: string): Promise<Notam[]> {
        return await apiRequest<Notam[]>(`v2/divisions/${divisionId}/notams/all`, [], 'GET');
    }
}