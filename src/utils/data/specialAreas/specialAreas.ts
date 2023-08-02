import axios from 'axios';
import { userClient } from '../../..';
import { Notam, SpecialAreas } from '../../../types/data';

export class specialAreas {
    constructor() {};

    async all(now: boolean, mapType?: 'regionMap' | 'regionMapPolygon'): Promise<Notam[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/specialAreas/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                ...(now ? { now } : {}),
                ...(mapType ? { mapType } : {}),
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }

    async get(notamId: number): Promise<SpecialAreas> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<SpecialAreas>(`https://api.ivao.aero/v2/specialAreas/${notamId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}