import { Notam, SpecialAreas } from '../../../types/data';
export declare class specialAreas {
    constructor();
    all(now: boolean, mapType?: 'regionMap' | 'regionMapPolygon'): Promise<Notam[]>;
    get(notamId: number): Promise<SpecialAreas>;
}
