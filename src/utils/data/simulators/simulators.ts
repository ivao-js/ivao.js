import axios from 'axios';
import { userClient } from '../../..';
import { Simulators } from '../../../types/data';

export class simulators {
    constructor() {}; 

    async all(name: string, isActive?: boolean): Promise<Simulators[]> {
        return await axios.get<Simulators[]>(`https://api.ivao.aero/v2/simulators/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                name,
                isActive,
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(simulatorId: string): Promise<Simulators> {
        return await axios.get<Simulators>(`https://api.ivao.aero/v2/simulators/${simulatorId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                id: simulatorId
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}