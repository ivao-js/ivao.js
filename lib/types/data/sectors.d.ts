import { Country } from '.';
export interface Sector {
    id: number;
    name: string;
    countryId: string;
    country: Country;
}
export interface SectorFile {
    id: number;
    name: string;
    sectorId: string;
    valid: boolean;
}
export interface SectorFileExtend extends SectorFile {
    airacId: number;
}
