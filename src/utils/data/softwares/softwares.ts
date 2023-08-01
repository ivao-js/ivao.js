import axios from 'axios';
import { userClient } from '../../..';
import { Software, SoftwareFiles } from '../../../types/data';
import request from 'superagent';
import fs, { PathLike } from 'fs';
import { join } from 'path';

export class softwares {
    constructor() {}; 

    async get(softwareId: string, softwareType: string): Promise<Software> {
        return await axios.get<Software>(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await axios.get<SoftwareFiles[]>(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getLatestFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await axios.get<SoftwareFiles[]>(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/latest`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadLatestFiles(softwareId: string, softwareType: string, path: PathLike): Promise<void> {
        let { name } = await this.get(softwareId, softwareType);

        request
            .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/latest/download`)
            .set('apiKey', userClient.options.apiKey)
            .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
            .on('finish', () => {
                return console.log(`${name}.zip was download in ${path}`);
            });
    }

    async getFilesWhereId(softwareFileId: string, softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await axios.get<SoftwareFiles[]>(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadFiles(softwareFileId: string, softwareId: string, softwareType: string, path: PathLike): Promise<void> {
        let { name } = await this.get(softwareId, softwareType);

        request
            .get(`https://api.ivao.aero/v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}/download`)
            .set('apiKey', userClient.options.apiKey)
            .pipe(fs.createWriteStream(join(`${path}/${name}.zip`)))
            .on('finish', () => {
                return console.log(`${name}.zip was download in ${path}`);
            });
    }

    async files(type: string, operatingSystem: string, version: string, versionSuffix: string, fsdName: string): Promise<SoftwareFiles[]> {
        return await axios.get<SoftwareFiles[]>(`https://api.ivao.aero/v2/softwares/softwareFiles`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                type,
                operatingSystem,
                version,
                versionSuffix,
                fsdName
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}