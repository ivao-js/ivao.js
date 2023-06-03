import { Country } from '../../../types/data/index';
export declare class countries {
    constructor();
    get(countryId: string): Promise<Country>;
}
