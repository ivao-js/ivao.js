import axios from 'axios';
import { Aircraft } from '../../types/data/index';
import { userClient } from '../..';

export class airlines {
    constructor() {};

    async get(airlineIcao: string): Promise<Aircraft> {
        return await axios.get<Aircraft>(`https://api.ivao.aero/v2/airlines/${airlineIcao}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<Aircraft[]> {
        return await axios.get<Aircraft[]>('https://api.ivao.aero/v2/airlines/all', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async logo(airlineIcao: string): Promise<Buffer> {
        return await axios.get<Buffer>(`https://api.ivao.aero/v2/airlines/${airlineIcao}/logo`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => {
            let newData = Buffer.from(data.data);
            let str = newData.toString();
            newData = Buffer.from(str);
    
            return newData;
        });
    }
}