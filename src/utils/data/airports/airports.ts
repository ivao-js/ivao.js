import axios from 'axios';
import { userClient } from '../../..';
import { BasATCPosition, Airport, Metar, Notam, Runway, ShortTaf, Squawk, SquawkGenerated, Taf } from '../../../types/data';

export class airports {
    constructor() {};

    async getAirport(icao: string): Promise<Airport> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Airport>(`https://api.ivao.aero/v2/airports/${icao}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async allAirports(): Promise<Airport[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Airport[]>('https://api.ivao.aero/v2/airports/all', {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async positions(icao: string): Promise<BasATCPosition[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<BasATCPosition[]>(`https://api.ivao.aero/v2/airports/${icao}/ATCPositions`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async notams(icao: string): Promise<Notam[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Notam[]>(`https://api.ivao.aero/v2/airports/${icao}/notams/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async runways(icao: string): Promise<Runway[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Runway[]>(`https://api.ivao.aero/v2/airports/${icao}/runways`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getSquawks(icao: string): Promise<Squawk[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Squawk[]>(`https://api.ivao.aero/v2/airports/${icao}/squawks`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async genSquawk(icao: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.post<SquawkGenerated>(`https://api.ivao.aero/v2/airports/${icao}/squawks/generate`, {
            originIcao,
            destinationIcao,
            flightRules,
            military
        }, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async allMetar(): Promise<Metar[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Metar[]>(`https://api.ivao.aero/v2/airports/all/metar`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getMetar(icao: string): Promise<Metar> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Metar>(`https://api.ivao.aero/v2/airports/${icao}/metar`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async allTaf(type: 'short' | 'normal'): Promise<ShortTaf[] | Taf[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        switch(type) {
            case 'normal': {
                return await axios.get<Taf[]>(`https://api.ivao.aero/v2/airports/all/taf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
                    },
                    responseType: 'json',
                }).then(data => data.data);
            }

            case 'short': {
                return await axios.get<ShortTaf[]>(`https://api.ivao.aero/v2/airports/all/shortTaf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
                    },
                    responseType: 'json',
                }).then(data => data.data);
            }
        }
    }

    async taf(icao: string, type: 'short' | 'normal'): Promise<ShortTaf | Taf> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        switch(type) {
            case 'normal': {
                return await axios.get<Taf>(`https://api.ivao.aero/v2/airports/${icao}/taf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
                    },
                    responseType: 'json',
                }).then(data => data.data);
            }

            case 'short': {
                return await axios.get<ShortTaf>(`https://api.ivao.aero/v2/airports/${icao}/shortTaf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
                    },
                    responseType: 'json',
                }).then(data => data.data);
            }
        }
    }
}