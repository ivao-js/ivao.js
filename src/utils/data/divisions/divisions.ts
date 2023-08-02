import axios from 'axios';
import { userClient } from '../../..';
import { Notam } from '../../../types/data';

export class divisions {
    constructor() {};

    async getNotams(divisionId: string): Promise<Notam[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/divisions/${divisionId}/notams/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}