import axios from 'axios';
import { userClient } from '../../..';
import { Motd } from '../../../types/data';

export class motds {
    constructor() {};

    async getLatest(): Promise<Motd> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Motd>(`https://api.ivao.aero/v2/motds/latest`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}