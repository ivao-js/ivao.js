import { Squawk } from '../../../types/data';
export declare class squawks {
    constructor();
    get(squawkId: number): Promise<Squawk>;
}
