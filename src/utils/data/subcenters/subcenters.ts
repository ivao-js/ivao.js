import axios from 'axios';
import { userClient } from '../../..';
import { Antenna, BaseSubcenter, Subcenter } from '../../../types/data';

export class subcenters {
    constructor() {};

    /**
     * @example atcCallsign : LFBB -> Bordeaux Control
     */
    async getSubcenters(id: number, atcCallsign: string): Promise<BaseSubcenter> {
        return await axios.get<BaseSubcenter>(`https://api.ivao.aero/v2/centers/${id}/subcenters`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: { 'atcCallsign': atcCallsign }
        }).then(data => data.data);
    }

    async get(id: number): Promise<Subcenter> {
        return await axios.get<Subcenter>(`https://api.ivao.aero/v2/subcenters/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            }
        }).then(data => data.data);
    }

    async getAll(mapType: 'regionMap' | 'regionMapPolygon'): Promise<Subcenter> {
        return await axios.get<Subcenter>(`https://api.ivao.aero/v2/subcenters/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: { 'mapType': mapType }
        }).then(data => data.data);
    }

    async getAntennas(subCenterId: number): Promise<Antenna> {
        return axios.get<Antenna>(`https://api.ivao.aero/v2/subcenters/${subCenterId}/antennas`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            }
        }).then(data => data.data);
    }
}