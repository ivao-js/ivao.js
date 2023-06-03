/// <reference types="node" />
import { Airlines } from '../../../types/data';
export declare class airlines {
    constructor();
    get(airlineIcao: string): Promise<Airlines>;
    all(): Promise<Airlines[]>;
    logo(airlineIcao: string): Promise<Buffer>;
}
