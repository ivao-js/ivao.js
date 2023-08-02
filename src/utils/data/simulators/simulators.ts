import axios from 'axios';
import { userClient } from '../../..';
import { Simulators } from '../../../types/data';

export class simulators {
    constructor() {}; 

    async all(name: string, isActive?: boolean): Promise<Simulators[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Simulators[]>(`https://api.ivao.aero/v2/simulators/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                name,
                isActive,
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(simulatorId: string): Promise<Simulators> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Simulators>(`https://api.ivao.aero/v2/simulators/${simulatorId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                id: simulatorId
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}