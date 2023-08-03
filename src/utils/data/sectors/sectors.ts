import * as request from 'superagent';
import fs, { PathLike } from 'fs';
import { join } from 'path';
import { userClient } from '../../..';
import { Sector, SectorFile, SectorFileExtend } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class sectors {
    constructor() {};

    async all(): Promise<Sector[]> {
        return await apiRequest<Sector[]>(`v2/sectors/all`, [], 'GET');
    }

    async get(sectorId: string): Promise<Sector> {
        return await apiRequest<Sector>(`v2/sectors/${sectorId}`, null, 'GET');
    }

    async getAllFiles(sectorId: string): Promise<SectorFile[]> {
        return await apiRequest<SectorFile[]>(`v2/sectors/${sectorId}/files`, [], 'GET');
    }

    async getLatestFiles(sectorId: string): Promise<SectorFile[]> {
        return await apiRequest<SectorFile[]>(`v2/sectors/${sectorId}/files/latest`, [], 'GET');
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
        return await apiRequest<SectorFileExtend>(`v2/sectors/${sectorId}/files/${sectorFileId}`, null, 'GET');
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