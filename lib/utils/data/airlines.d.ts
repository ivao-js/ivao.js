/// <reference types="node" />
import { Aircraft } from '../../types/data/index';
import { Client } from '../..';
export declare class airlines {
    private readonly client;
    constructor(client: Client);
    get(airlineIcao: string): Promise<Aircraft>;
    all(): Promise<Aircraft[]>;
    logo(airlineIcao: string): Promise<Buffer>;
}
