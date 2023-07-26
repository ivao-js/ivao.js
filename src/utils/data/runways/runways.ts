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
        return await axios.get<RunwayDto>(`https://api.ivao.aero/v2/runways/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}