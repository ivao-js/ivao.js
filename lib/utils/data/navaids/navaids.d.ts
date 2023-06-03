import { Navaid } from '../../../types/data';
export declare class navaids {
    constructor();
    get(navaid: number, type: 'VOR' | 'FIX' | 'NDB'): Promise<Navaid>;
}
