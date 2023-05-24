import axios from 'axios';
import { AircraftTransponderType } from '../../types/data/index';
import { userClient } from '../..';

export class aircraftTransponderTypes {
    constructor() {};

    async get(transponderId: string): Promise<AircraftTransponderType> {
        return await axios.get<AircraftTransponderType>(`https://api.ivao.aero/v2/aircrafts/transponderTypes/${transponderId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftTransponderType[]> {
        return await axios.get<AircraftTransponderType[]>('https://api.ivao.aero/v2/aircrafts/transponderTypes', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}