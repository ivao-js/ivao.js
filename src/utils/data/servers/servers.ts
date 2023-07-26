import axios from 'axios';
import { userClient } from '../../..';
import { Servers } from '../../../types/data';

export class servers {
    constructor() {}; 

    async all(type: string, hostname?: string, isActive?: boolean): Promise<Servers[]> {
        return await axios.get<Servers[]>(`https://api.ivao.aero/v2/servers/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
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
        return await axios.get<Servers>(`https://api.ivao.aero/v2/servers/${serverId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                id: serverId
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}