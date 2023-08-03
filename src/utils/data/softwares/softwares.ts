import { userClient } from '../../..';
import { Software, SoftwareFiles } from '../../../types/data';
import request from 'superagent';
import fs, { PathLike } from 'fs';
import { join } from 'path';
import { apiRequest } from '../../apiRequest';

export class softwares {
    constructor() {}; 

    async get(softwareId: string, softwareType: string): Promise<Software> {
        return await apiRequest<Software>(`v2/softwares/${softwareType}/${softwareId}`, null, 'GET');
    }

    async getFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/${softwareType}/${softwareId}/files`, [], 'GET');
    }

    async getLatestFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/${softwareType}/${softwareId}/files/latest`, [], 'GET');
    }

    async downloadLatestFiles(softwareId: string, softwareType: string, path: PathLike): Promise<void> {
        let { name } = await this.get(softwareId, softwareType);

        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        (userClient.options.type === 'apiKey' ? (
            request
                .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/latest/download`)
                .set('apiKey', userClient.options.apiKey)
                .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
                .on('finish', () => {
                    return console.log(`${name}.zip was download in ${path}`);
                })) : (
            request
                .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/latest/download`)
                .set('Authorization', `Bearer ${token.token.access_token}`)
                .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
                .on('finish', () => {
                    return console.log(`${name}.zip was download in ${path}`);
                })
        ));
    }

    async getFilesWhereId(softwareFileId: string, softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}`, [], 'GET');
    }

    async downloadFiles(softwareFileId: string, softwareId: string, softwareType: string, path: PathLike): Promise<void> {
        let { name } = await this.get(softwareId, softwareType);

        let token = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

        (userClient.options.type === 'apiKey' ? (
            request
                .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}/download`)
                .set('apiKey', userClient.options.apiKey)
                .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
                .on('finish', () => {
                    return console.log(`${name}.zip was download in ${path}`);
                })) : (
            request
                .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}/download`)
                .set('Authorization', `Bearer ${token.token.access_token}`)
                .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
                .on('finish', () => {
                    return console.log(`${name}.zip was download in ${path}`);
                })
        ));
    }

    async files(type: string, operatingSystem: string, version: string, versionSuffix: string, fsdName: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/softwareFiles`, [], 'GET', { type, operatingSystem, version, versionSuffix, fsdName });
    }
}