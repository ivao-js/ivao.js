import axios from 'axios';
import { userClient } from '../../..';
import { Airlines } from '../../../types/data';

export class airlines {
    constructor() {};

    async get(airlineIcao: string): Promise<Airlines> {
        return await axios.get<Airlines>(`https://api.ivao.aero/v2/airlines/${airlineIcao}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<Airlines[]> {
        return await axios.get<Airlines[]>('https://api.ivao.aero/v2/airlines/all', {
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
            let buffer = Buffer.from(data.data);
            let str = buffer.toString();

            buffer = Buffer.from(str);
    
            return buffer;
        });
    }
}