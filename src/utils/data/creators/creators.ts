import axios from 'axios';
import { userClient } from '../../..';
import { Creator } from '../../../types/data';

export class creators {
    constructor() {};

    async get(vid: string): Promise<Creator> {
        return await axios.get<Creator>(`https://api.ivao.aero/v2/creators/${vid}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async all(): Promise<Creator[]> {
        return await axios.get<Creator[]>(`https://api.ivao.aero/v2/creators/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}