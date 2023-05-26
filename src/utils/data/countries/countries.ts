import axios from 'axios';
import { userClient } from '../../..';
import { Country } from '../../../types/data/index';

export class countries {
    constructor() {};

    async get(countryId: string): Promise<Country> {
        return await axios.get<Country>(`https://api.ivao.aero/v2/countries/${countryId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}