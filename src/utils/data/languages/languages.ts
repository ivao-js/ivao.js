import { Language } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class languages {
    constructor() {};

    async get(languageId: string): Promise<Language> {
        return await apiRequest<Language>(`v2/languages/${languageId}`, null, 'GET');
    }
}