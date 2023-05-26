import axios from 'axios';
import { userClient } from '../../..';
import { Notam } from '../../../types/data';

export class divisions {
    constructor() {};

    async getNotams(divisionId: string): Promise<Notam[]> {
        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/divisions/${divisionId}/notams/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}