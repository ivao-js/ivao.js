import axios from 'axios';
import { userClient } from '../..';
import { Airlines } from '../../types/data';

export class airports {
    constructor() {};

    async getAirport(icao: string): Promise<string> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async allAirports(): Promise<string> {
        return await axios.get<any>('https://api.ivao.aero/v2/airports/all', {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async positions(icao: string): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}/ATCPositions`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async notams(icao: string): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}/notams/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async runways(icao: string): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}/runways`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async getSquawks(icao: string): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}/squawks`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async genSquawks(icao: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<string[]> {
        return await axios.post<any>(`https://api.ivao.aero/v2/airports/${icao}/squawks/generate`, {
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
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async allMetar(): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/metar/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async getMetar(icao: string): Promise<string[]> {
        return await axios.get<any>(`https://api.ivao.aero/v2/airports/${icao}/metar`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data).catch((err: Error) => {
            return console.error(err);
        });
    }

    async allTaf(type: 'short' | 'normal'): Promise<string[]> {
        switch(type) {
            case 'normal': {
                return await axios.get<any>(`https://api.ivao.aero/v2/airports/all/taf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'apiKey': userClient.options.apiKey
                    },
                    responseType: 'json',
                }).then(data => data.data).catch((err: Error) => {
                    return console.error(err);
                });
            }

            case 'short': {
                return await axios.get<any>(`https://api.ivao.aero/v2/airports/all/shortTaf`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'apiKey': userClient.options.apiKey
                    },
                    responseType: 'json',
                }).then(data => data.data).catch((err: Error) => {
                    return console.error(err);
                });
            }
        }
    }
}