import { SimulatorVersions } from '../../../types/data';
export declare class simulatorVersions {
    constructor();
    all(name?: string, hasBaseModels?: boolean, version?: string, isActive?: boolean): Promise<SimulatorVersions[]>;
    get(baseModelId: string): Promise<SimulatorVersions>;
}
