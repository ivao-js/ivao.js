import { Creator } from '../../../types/data';
export declare class creators {
    constructor();
    get(vid: string): Promise<Creator>;
    all(): Promise<Creator[]>;
}
