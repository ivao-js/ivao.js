import { Motd } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class motds {
    constructor() {};

    async getLatest(): Promise<Motd> {
        return await apiRequest<Motd>(`v2/motds/latest`, null, 'GET');
    }
}