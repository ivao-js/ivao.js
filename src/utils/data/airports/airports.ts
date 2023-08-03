import { BasATCPosition, Airport, Metar, Notam, Runway, ShortTaf, Squawk, SquawkGenerated, Taf } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class airports {
    constructor() {};

    async getAirport(icao: string): Promise<Airport> {
        return await apiRequest<Airport>(`v2/airports/${icao}`, null, 'GET');
    }

    async allAirports(): Promise<Airport[]> {
        return await apiRequest<Airport[]>(`v2/airports/all`, [], 'GET');
    }

    async positions(icao: string): Promise<BasATCPosition[]> {
        return await apiRequest<BasATCPosition[]>(`v2/airports/${icao}/ATCPositions`, [], 'GET');
    }

    async notams(icao: string): Promise<Notam[]> {
        return await apiRequest<Notam[]>(`v2/airports/${icao}/notams/all`, [], 'GET');
    }

    async runways(icao: string): Promise<Runway[]> {
        return await apiRequest<Runway[]>(`v2/airports/${icao}/runways`, [], 'GET');
    }

    async getSquawks(icao: string): Promise<Squawk[]> {
        return await apiRequest<Squawk[]>(`v2/airports/${icao}/squawks`, [], 'GET');
    }

    async genSquawk(icao: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated> {
        return await apiRequest<SquawkGenerated>(`v2/airports/${icao}/squawks/generate`, null, 'POST', { originIcao, destinationIcao, flightRules, military });
    }

    async allMetar(): Promise<Metar[]> {
        return await apiRequest<Metar[]>(`v2/airports/all/metar`, [], 'GET');
    }

    async getMetar(icao: string): Promise<Metar> {
        return await apiRequest<Metar>(`v2/airports/${icao}/metar`, null, 'GET');
    }

    async allTaf(type: 'short' | 'normal'): Promise<ShortTaf[] | Taf[]> {
        switch(type) {
            case 'normal': {
                return await apiRequest<Taf[]>(`v2/airports/all/taf`, [], 'GET');
            }

            case 'short': {
                return await apiRequest<ShortTaf[]>(`v2/airports/all/shortTaf`, [], 'GET');
            }
        }
    }

    async taf(icao: string, type: 'short' | 'normal'): Promise<ShortTaf | Taf> {
        switch(type) {
            case 'normal': {
                return await apiRequest<Taf>(`v2/airports/${icao}/taf`, null, 'GET');
            }

            case 'short': {
                return await apiRequest<ShortTaf>(`v2/airports/${icao}/shortTaf`, null, 'GET');
            }
        }
    }
}