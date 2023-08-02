import axios from 'axios';
import { userClient } from '../../..';
import { Country } from '../../../types/data/index';

export class countries {
    constructor() {};

    async get(countryId: string): Promise<Country> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Country>(`https://api.ivao.aero/v2/countries/${countryId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}