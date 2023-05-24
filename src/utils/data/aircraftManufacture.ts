import axios from 'axios';
import {
    AircraftManufacture as AircraftManufactureDto
} from '../../types/data/index';
import { Client } from '../..';

export class aircraftManufacture {
    constructor(private readonly client: Client) {};

    async get(id: number): Promise<AircraftManufactureDto> {
        return await axios.get<AircraftManufactureDto>(`https://api.ivao.aero/v2/aircrafts/manufacturers/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftManufactureDto[]> {
        return await axios.get<AircraftManufactureDto[]>('https://api.ivao.aero/v2/aircrafts/manufacturers', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}