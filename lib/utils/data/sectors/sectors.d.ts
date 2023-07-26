/// <reference types="node" />
import { PathLike } from 'fs';
import { Sector, SectorFile, SectorFileExtend } from '../../../types/data';
export declare class sectors {
    constructor();
    all(): Promise<Sector[]>;
    get(sectorId: string): Promise<Sector>;
    getAllFiles(sectorId: string): Promise<SectorFile[]>;
    getLatestFiles(sectorId: string): Promise<SectorFile[]>;
    downloadLatestFiles(sectorId: string, path: PathLike): Promise<void>;
    getFiles(sectorId: string, sectorFileId: number): Promise<SectorFileExtend>;
    downloadFiles(sectorId: string, sectorFileId: number, path: PathLike): Promise<any>;
}
