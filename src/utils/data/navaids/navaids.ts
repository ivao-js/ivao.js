import axios from 'axios';
import { userClient } from '../../..';
import { Navaid } from '../../../types/data';

export class navaids {
    constructor() {};

    async get(navaid: number, type: 'VOR' | 'FIX' | 'NDB'): Promise<Navaid> {
        return await axios.get<Navaid>(`https://api.ivao.aero/v2/navaids/${type}/${navaid}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}