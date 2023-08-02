import axios from 'axios';
import { userClient } from '../../..';
import { Servers } from '../../../types/data';

export class servers {
    constructor() {}; 

    async all(type: string, hostname?: string, isActive?: boolean): Promise<Servers[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Servers[]>(`https://api.ivao.aero/v2/servers/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                hostname,
                isActive,
                type
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(serverId: string): Promise<Servers> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });
        
        return await axios.get<Servers>(`https://api.ivao.aero/v2/servers/${serverId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                id: serverId
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}