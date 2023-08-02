import axios from 'axios';
import { userClient } from '../../..';
import { Antenna, BaseSubcenter, Subcenter } from '../../../types/data';

export class subcenters {
    constructor() {};

    /**
     * @example atcCallsign : LFBB -> Bordeaux Control
     */
    async getSubcenters(id: number, atcCallsign: string): Promise<BaseSubcenter> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<BaseSubcenter>(`https://api.ivao.aero/v2/centers/${id}/subcenters`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: { 'atcCallsign': atcCallsign }
        }).then(data => data.data);
    }

    async get(id: number): Promise<Subcenter> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Subcenter>(`https://api.ivao.aero/v2/subcenters/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            }
        }).then(data => data.data);
    }

    async getAll(mapType: 'regionMap' | 'regionMapPolygon'): Promise<Subcenter> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Subcenter>(`https://api.ivao.aero/v2/subcenters/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            params: { ...(mapType ? { mapType } : {}) }
        }).then(data => data.data);
    }

    async getAntennas(subCenterId: number): Promise<Antenna> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });
        
        return axios.get<Antenna>(`https://api.ivao.aero/v2/subcenters/${subCenterId}/antennas`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            }
        }).then(data => data.data);
    }
}