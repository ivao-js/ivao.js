import axios from 'axios';
import { userClient } from '../../..';
import { Language } from '../../../types/data';

export class languages {
    constructor() {};

    async get(languageId: string): Promise<Language> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Language>(`https://api.ivao.aero/v2/languages/${languageId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}