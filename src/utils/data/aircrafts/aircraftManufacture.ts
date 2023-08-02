import axios from 'axios';
import {
    AircraftManufacture as AircraftManufactureDto
} from '../../../types/data/index';
import { userClient } from '../../..';

export class aircraftManufacture {
    constructor() {};

    async get(id: number): Promise<AircraftManufactureDto> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftManufactureDto>(`https://api.ivao.aero/v2/aircrafts/manufacturers/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftManufactureDto[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftManufactureDto[]>('https://api.ivao.aero/v2/aircrafts/manufacturers', {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}