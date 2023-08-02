import axios from 'axios';
import { AircraftEquipment } from '../../../types/data/index';
import { userClient } from '../../..';

export class aircraftEquipment {
    constructor() {};

    async get(equipmentId: string): Promise<AircraftEquipment> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftEquipment>(`https://api.ivao.aero/v2/aircrafts/equipments/${equipmentId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<AircraftEquipment[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<AircraftEquipment[]>('https://api.ivao.aero/v2/aircrafts/equipments', {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}