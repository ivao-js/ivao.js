import { Servers } from '../../../types/data';
export declare class servers {
    constructor();
    all(type: string, hostname?: string, isActive?: boolean): Promise<Servers[]>;
    get(serverId: string): Promise<Servers>;
}
