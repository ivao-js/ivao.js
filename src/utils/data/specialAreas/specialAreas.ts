import axios from 'axios';
import { userClient } from '../../..';
import { Notam, SpecialAreas } from '../../../types/data';

export class specialAreas {
    constructor() {};

    async all(now: boolean, mapType?: 'regionMap' | 'regionMapPolygon'): Promise<Notam[]> {
        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/specialAreas/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                ...(now ? { now } : {}),
                ...(mapType ? { mapType } : {}),
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }

    async get(notamId: number): Promise<SpecialAreas> {
        return await axios.get<SpecialAreas>(`https://api.ivao.aero/v2/specialAreas/${notamId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}