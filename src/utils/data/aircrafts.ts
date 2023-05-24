import axios from 'axios';
import { Aircraft, AircraftVariant } from '../../types/data/index';
import { userClient } from '../..';

export class aircrafts {
    constructor() {};

    async get(icao: string): Promise<Aircraft> {
        return await axios.get<Aircraft>(`https://api.ivao.aero/v2/aircrafts/${icao}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<Aircraft[]> {
        return await axios.get<Aircraft[]>('https://api.ivao.aero/v2/aircrafts/all', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async variants(icao: string): Promise<AircraftVariant[]> {
        return await axios.get<AircraftVariant[]>(`https://api.ivao.aero/v2/aircrafts/${icao}/variants`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}