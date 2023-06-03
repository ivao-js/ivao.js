import { BaseSubcenter, Center, Notam, SpecialAreas, Squawk, SquawkGenerated } from '../../../types/data/index';
export declare class centers {
    constructor();
    /**
     * @param centerId
     * @description Allows you to obtain a center using an id
     * @returns
     */
    get(centerId: string): Promise<Center>;
    getAllNotams(centerId: string): Promise<Notam[]>;
    getAllSpecialAreas(centerId: string): Promise<SpecialAreas>;
    getSquawks(centerId: string): Promise<Squawk[]>;
    genSquawk(centerId: string, originIcao: string, destinationIcao: string, flightRules?: 'I' | 'V', military?: boolean): Promise<SquawkGenerated>;
    getSubcenters(centerId: string): Promise<BaseSubcenter[]>;
}
