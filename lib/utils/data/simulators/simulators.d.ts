import { Simulators } from '../../../types/data';
export declare class simulators {
    constructor();
    all(name: string, isActive?: boolean): Promise<Simulators[]>;
    get(simulatorId: string): Promise<Simulators>;
}
