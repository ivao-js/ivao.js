import axios from 'axios';
import * as request from 'superagent';
import fs, { PathLike } from 'fs';
import { join } from 'path';

import { userClient } from '../../..';
import { Sector, SectorFile, SectorFileExtend } from '../../../types/data';

export class sectors {
    constructor() {};

    async all(): Promise<Sector[]> {
        return await axios.get<Sector[]>(`https://api.ivao.aero/v2/sectors/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(sectorId: string): Promise<Sector> {
        return await axios.get<Sector>(`https://api.ivao.aero/v2/sectors/${sectorId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getAllFiles(sectorId: string): Promise<SectorFile[]> {
        return await axios.get<SectorFile[]>(`https://api.ivao.aero/v2/sectors/${sectorId}/files`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async getLatestFiles(sectorId: string): Promise<SectorFile[]> {
        return await axios.get<SectorFile[]>(`https://api.ivao.aero/v2/sectors/${sectorId}/files/latest`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadLatestFiles(sectorId: string, path: PathLike): Promise<void> {
        const { country } = await this.get(sectorId);

        let isDownload: boolean = false;

        request
            .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/latest/download`)
            .set('apiKey', userClient.options.apiKey)
            .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
            .on('pipe', () => {
                var loading = (function() {
                    var h = ['|', '/', '-', '\\'];
                    var i = 0;
                    
                    return setInterval(() => {
                        i = (i > 3) ? 0 : i;
                        console.clear();
                        console.log(h[i]);
                        i++;
                    }, 300);
                })();

                if(isDownload) clearInterval(loading);
            })
            .on('finish', () => {
                isDownload = true;

                return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
            })
            .end();
    }

    async getFiles(sectorId: string, sectorFileId: number): Promise<SectorFileExtend> {
        return await axios.get<SectorFileExtend>(`https://api.ivao.aero/v2/sectors/${sectorId}/files/${sectorFileId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async downloadFiles(sectorId: string, sectorFileId: number, path: PathLike): Promise<any> {
        const { country } = await this.get(sectorId);

        let isDownload: boolean = false;

        request
            .get(`https://api.ivao.aero/v2/sectors/${sectorId}/files/${sectorFileId}/download`)
            .set('apiKey', userClient.options.apiKey)
            .pipe(fs.createWriteStream(join(`${path}/${country.name.toLowerCase()}.zip`)))
            .on('pipe', () => {
                var loading = (function() {
                    var h = ['|', '/', '-', '\\'];
                    var i = 0;
                  
                    return setInterval(() => {
                        i = (i > 3) ? 0 : i;
                        console.clear();
                        console.log(h[i]);
                        i++;
                    }, 300);
                })();

                if(isDownload) clearInterval(loading);
            })
            .on('finish', () => {
                isDownload = true;

                return console.log(`${country.name.toLowerCase()}.zip was download in ${path}`);
            })
            .end();
    }
}