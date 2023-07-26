/// <reference types="node" />
import { Software, SoftwareFiles } from '../../../types/data';
import { PathLike } from 'fs';
export declare class softwares {
    constructor();
    get(softwareId: string, softwareType: string): Promise<Software>;
    getFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]>;
    getLatestFiles(softwareId: string, softwareType: string): Promise<SoftwareFiles[]>;
    downloadLatestFiles(softwareId: string, softwareType: string, path: PathLike): Promise<void>;
    getFilesWhereId(softwareFileId: string, softwareId: string, softwareType: string): Promise<SoftwareFiles[]>;
    downloadFiles(softwareFileId: string, softwareId: string, softwareType: string, path: PathLike): Promise<void>;
    files(type: string, operatingSystem: string, version: string, versionSuffix: string, fsdName: string): Promise<SoftwareFiles[]>;
}
