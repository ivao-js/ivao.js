import axios from 'axios';
import { userClient } from '../../..';

interface RunwayDto {
    id: number;
    airportIcao: string;
    length: string;
    bearing: string;
    latitude: number;
    longitude: number;
    elevation: number;
    width: number;
}

export class runways {
    constructor() {}; 

    async get(id: string): Promise<RunwayDto> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<RunwayDto>(`https://api.ivao.aero/v2/runways/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}