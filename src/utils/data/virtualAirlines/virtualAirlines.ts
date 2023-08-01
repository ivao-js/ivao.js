import axios from 'axios';
import { userClient } from '../../..';
import { BaseVirtualAirline, MixedVirtualAirline, VirtualAirline } from '../../../types/data';

export class virtualAirlines {
    constructor() {};

    async all(): Promise<MixedVirtualAirline[]> {
        return await axios.get<MixedVirtualAirline[]>(`https://api.ivao.aero/v2/virtualAirlines/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
        }).then(({ data }) => data);
    }

    async getAllByCallsign(airlineIcao: string): Promise<BaseVirtualAirline[]> {
        return await axios.get<BaseVirtualAirline[]>(`https://api.ivao.aero/v2/airlines/${airlineIcao}/virtualAirlines`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
        }).then(({ data }) => data);
    }
    
    async get(id: string): Promise<VirtualAirline> {
        return await axios.get<VirtualAirline>(`https://api.ivao.aero/v2/virtualAirlines/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
        }).then(({ data }) => data);
    }

    async getMainLogo(virtualAirlineId: string): Promise<Buffer> {
        return await axios.get<Buffer>(`https://api.ivao.aero/v2/virtualAirlines/${virtualAirlineId}/mainLogo`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
        }).then(({ data }) => data);
    }

    async getOnlineLogo(virtualAirlineId: string): Promise<Buffer> {
        return await axios.get<Buffer>(`https://api.ivao.aero/v2/virtualAirlines/${virtualAirlineId}/onlineLogo`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
        }).then(({ data }) => data);
    }
}