import axios from 'axios';
import { userClient } from '../../..';
import { ATCPosition, Antenna, Position } from '../../../types/data/index';

export class atcPositions {
    constructor() {};

    async get(callsign: string): Promise<ATCPosition> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<ATCPosition>(`https://api.ivao.aero/v2/ATCPositions/${callsign}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<ATCPosition[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<ATCPosition[]>('https://api.ivao.aero/v2/ATCPositions/all', {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async antennas(callsign: string): Promise<Antenna[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Antenna[]>(`https://api.ivao.aero/v2/ATCPositions/${callsign}/antennas`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async search(
        startsWith?: string,
        positionType?:
            'CTR' |
            'APP' |
            'DEP' |
            'TWR' |
            'GND' |
            'DEL' |
            'ATIS',
        icao?: string,
        limit?: number,
        composePositionList?: boolean
    ): Promise<Position[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Position[]>(`https://api.ivao.aero/v2/positions/search`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: {
                startsWith,
                positionType,
                icao,
                limit,
                composePositionList  
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}