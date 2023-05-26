import axios from 'axios';
import { userClient } from '../../..';
import { Language } from '../../../types/data';

export class languages {
    constructor() {};

    async get(languageId: string): Promise<Language> {
        return await axios.get<Language>(`https://api.ivao.aero/v2/languages/${languageId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}