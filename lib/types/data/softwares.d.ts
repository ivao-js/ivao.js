export interface Software {
    id: number;
    type: string;
    name: string;
}
export interface SoftwareFiles {
    id: number;
    type: string;
    softwareId: string;
    extension: string;
    valid: boolean;
    version: string;
}
