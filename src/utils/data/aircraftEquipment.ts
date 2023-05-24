import axios from 'axios';
import { AircraftEquipment } from '../../types/data/index';
import { Client } from '../..';

export class aircraftEquipment {
    constructor(private readonly client: Client) {};

    async get(equipmentId: string): Promise<AircraftEquipment> {
        return await axios.get<AircraftEquipment>(`https://api.ivao.aero/v2/aircrafts/equipments/${equipmentId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftEquipment[]> {
        return await axios.get<AircraftEquipment[]>('https://api.ivao.aero/v2/aircrafts/equipments', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.client.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}