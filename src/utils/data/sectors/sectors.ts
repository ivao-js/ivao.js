import { PathLike } from 'fs';
import { Sector, SectorFile, SectorFileExtend } from '../../../types/data';
import { apiDownload, apiRequest } from '../../apiRequest';

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

        return await apiDownload(`v2/sectors/${sectorId}/files/latest/download`, path, null, country.name.toLowerCase());
    }

    async getFiles(sectorId: string, sectorFileId: number): Promise<SectorFileExtend> {
        return await apiRequest<SectorFileExtend>(`v2/sectors/${sectorId}/files/${sectorFileId}`, null, 'GET');
    }

    async downloadFiles(sectorId: string, sectorFileId: number, path: PathLike): Promise<void> {
        const { country } = await this.get(sectorId);

        return await apiDownload(`v2/sectors/${sectorId}/files/${sectorFileId}/download`, path, null, country.name.toLowerCase());
    }
}