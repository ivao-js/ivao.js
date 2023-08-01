/// <reference types="node" />
import { BaseVirtualAirline, MixedVirtualAirline, VirtualAirline } from '../../../types/data';
export declare class virtualAirlines {
    constructor();
    all(): Promise<MixedVirtualAirline[]>;
    getAllByCallsign(airlineIcao: string): Promise<BaseVirtualAirline[]>;
    get(id: string): Promise<VirtualAirline>;
    getMainLogo(virtualAirlineId: string): Promise<Buffer>;
    getOnlineLogo(virtualAirlineId: string): Promise<Buffer>;
}
