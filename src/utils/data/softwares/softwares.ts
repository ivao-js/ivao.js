import { PathLike } from 'fs';
import { Software, SoftwareFiles } from '../../../types/data';
import { apiDownload, apiRequest } from '../../apiRequest';

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

        return await apiDownload(`v2/softwares/${softwareType}/${softwareId}/files/latest/download`, path, null, name);
    }

    async getFilesWhereId(softwareFileId: string, softwareId: string, softwareType: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}`, [], 'GET');
    }

    async downloadFiles(softwareFileId: string, softwareId: string, softwareType: string, path: PathLike): Promise<void> {
        let { name } = await this.get(softwareId, softwareType);

        return await apiDownload(`v2/softwares/${softwareType}/${softwareId}/files/${softwareFileId}/download`, path, null, name);
    }

    async files(type: string, operatingSystem: string, version: string, versionSuffix: string, fsdName: string): Promise<SoftwareFiles[]> {
        return await apiRequest<SoftwareFiles[]>(`v2/softwares/softwareFiles`, [], 'GET', { type, operatingSystem, version, versionSuffix, fsdName });
    }
}