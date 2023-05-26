import axios from 'axios';
import { userClient } from '../../..';
import { BaseSubcenter, Center, Notam, SpecialAreas, Squawk, SquawkGenerated } from '../../../types/data/index';

export class centers {
    constructor() {};

    /**
     * @param centerId
     * @description Allows you to obtain a center using an id
     * @returns 
     */
    async get(centerId: string): Promise<Center> {
        return await axios.get<Center>(`https://api.ivao.aero/v2/centers/${centerId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getAllNotams(centerId: string): Promise<Notam[]> {
        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/centers/${centerId}/notams/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getAllSpecialAreas(centerId: string): Promise<SpecialAreas> {
        return await axios.get<SpecialAreas>(`https://api.ivao.aero/v2/centers/${centerId}/specialAreas/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getSquawks(centerId: string): Promise<Squawk[]> {
        return await axios.get<Squawk[]>(`https://api.ivao.aero/v2/centers/${centerId}/squawks`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async genSquawk(centerId: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated> {
        return await axios.post<SquawkGenerated>(`https://api.ivao.aero/v2/centers/${centerId}/squawks/generate`, {
            originIcao,
            destinationIcao,
            flightRules,
            military
        }, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getSubcenters(centerId: string): Promise<BaseSubcenter[]> {
        return await axios.get<BaseSubcenter[]>(`https://api.ivao.aero/v2/centers/${centerId}/subcenters`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}