import axios from 'axios';
import * as request from 'superagent';
import fs, { PathLike } from 'fs';
import { join } from 'path';
import { userClient } from '../../..';
import { Sector, SectorFile, SectorFileExtend } from '../../../types/data';

export class sectors {
    constructor() {};

    async all(): Promise<Sector[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Sector[]>(`https://api.ivao.aero/v2/sectors/all`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(sectorId: string): Promise<Sector> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<Sector>(`https://api.ivao.aero/v2/sectors/${sectorId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getAllFiles(sectorId: string): Promise<SectorFile[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<SectorFile[]>(`https://api.ivao.aero/v2/sectors/${sectorId}/files`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getLatestFiles(sectorId: string): Promise<SectorFile[]> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<SectorFile[]>(`https://api.ivao.aero/v2/sectors/${sectorId}/files/latest`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadLatestFiles(sectorId: string, path: PathLike): Promise<void> {
        const { country } = await this.get(sectorId);

        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        (userClient.options.type === 'apiKey' ? (
            request
                .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/latest/download`)
                .set('apiKey', userClient.options.apiKey)
                .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
                .on('finish', () => {
                    return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
                })) : (
            request
                .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/latest/download`)
                .set('Authorization', `Bearer ${token.token.access_token}`)
                .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
                .on('finish', () => {
                    return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
                })
        ));
    }

    async getFiles(sectorId: string, sectorFileId: number): Promise<SectorFileExtend> {
        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        return await axios.get<SectorFileExtend>(`https://api.ivao.aero/v2/sectors/${sectorId}/files/${sectorFileId}`, {
            headers: {
                'Content-Type': 'application/json',
                ...(userClient.options.type === 'apiKey' ? { 'apiKey': userClient.options.apiKey } : { 'Authorization': `Bearer ${token.token.access_token}` })
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadFiles(sectorId: string, sectorFileId: number, path: PathLike): Promise<void> {
        const { country } = await this.get(sectorId);

        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        (userClient.options.type === 'apiKey' ? (
            request
                .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/${sectorFileId}/download`)
                .set('apiKey', userClient.options.apiKey)
                .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
                .on('finish', () => {
                    return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
                })) : (
            request
                .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/${sectorFileId}/download`)
                .set('Authorization', `Bearer ${token.token.access_token}`)
                .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
                .on('finish', () => {
                    return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
                })
        ));
    }
}