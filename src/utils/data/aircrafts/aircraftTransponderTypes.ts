import axios from 'axios';
import { AircraftTransponderType } from '../../../types/data/index';
import { userClient } from '../../..';

export class aircraftTransponderTypes {
    constructor() {};

    async get(transponderId: string): Promise<AircraftTransponderType> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftTransponderType>(`https://api.ivao.aero/v2/aircrafts/transponderTypes/${transponderId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftTransponderType[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftTransponderType[]>('https://api.ivao.aero/v2/aircrafts/transponderTypes', {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}