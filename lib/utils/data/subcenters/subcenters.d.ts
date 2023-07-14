import { Antenna, BaseSubcenter, Subcenter } from '../../../types/data';
export declare class subcenters {
    constructor();
    /**
     * @example atcCallsign : LFBB -> Bordeaux Control
     */
    getSubcenters(id: number, atcCallsign: string): Promise<BaseSubcenter>;
    get(id: number): Promise<Subcenter>;
    getAll(mapType: 'regionMap' | 'regionMapPolygon'): Promise<Subcenter>;
    getAntennas(subCenterId: number): Promise<Antenna>;
}
