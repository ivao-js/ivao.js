import axios from 'axios';
import { userClient } from '../../..';
import { Motd } from '../../../types/data';

export class motds {
    constructor() {};

    async getLatest(): Promise<Motd> {
        return await axios.get<Motd>(`https://api.ivao.aero/v2/motds/latest`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(({ data }) => data);
    }
}