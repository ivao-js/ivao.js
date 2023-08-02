import axios from 'axios';
import { userClient } from '../../..';
import { Navaid } from '../../../types/data';

export class navaids {
    constructor() {};

    async get(navaid: number, type: 'VOR' | 'FIX' | 'NDB'): Promise<Navaid> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Navaid>(`https://api.ivao.aero/v2/navaids/${type}/${navaid}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}