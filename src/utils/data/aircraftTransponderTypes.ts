import axios from 'axios';
import { AircraftTransponderType } from '../../types/data/index';
import { Client } from '../..';

export class aircraftTransponderTypes {
    constructor(private readonly client: Client) {};

    async get(transponderId: string): Promise<AircraftTransponderType> {
        return await axios.get<AircraftTransponderType>(`https://api.ivao.aero/v2/aircrafts/transponderTypes/${transponderId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftTransponderType[]> {
        return await axios.get<AircraftTransponderType[]>('https://api.ivao.aero/v2/aircrafts/transponderTypes', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}