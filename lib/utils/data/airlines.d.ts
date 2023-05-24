/// <reference types="node" />
import { Aircraft } from '../../types/data/index';
export declare class airlines {
    constructor();
    get(airlineIcao: string): Promise<Aircraft>;
    all(): Promise<Aircraft[]>;
    logo(airlineIcao: string): Promise<Buffer>;
}
