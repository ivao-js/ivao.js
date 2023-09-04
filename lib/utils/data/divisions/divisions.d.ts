import { Notam } from '../../../types/data';
export declare class divisions {
    constructor();
    getNotams(divisionId: string): Promise<Notam[]>;
}
