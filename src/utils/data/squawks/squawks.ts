import axios from 'axios';
import { userClient } from '../../..';
import { Squawk } from '../../../types/data';

export class squawks {
    constructor() {};

    async get(squawkId: number): Promise<Squawk> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Squawk>(`https://api.ivao.aero/v2/squawks/${squawkId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}