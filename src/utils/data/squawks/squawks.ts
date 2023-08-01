import axios from 'axios';
import { userClient } from '../../..';
import { Squawk } from '../../../types/data';

export class squawks {
    constructor() {};

    async get(squawkId: number): Promise<Squawk> {
        return await axios.get<Squawk>(`https://api.ivao.aero/v2/squawks/${squawkId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}