import { Country } from '../../../types/data/index';
import { apiRequest } from '../../apiRequest';

export class countries {
    constructor() {};

    async get(countryId: string): Promise<Country> {
        return await apiRequest<Country>(`v2/countries/${countryId}`, null, 'GET');
    }
}