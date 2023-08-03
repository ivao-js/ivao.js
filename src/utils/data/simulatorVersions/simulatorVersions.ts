import { SimulatorVersions } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class simulatorVersions {
    constructor() {};

    async all(name?: string, hasBaseModels?: boolean, version?: string, isActive?: boolean): Promise<SimulatorVersions[]> {
        return await apiRequest<SimulatorVersions[]>(`v2/simulatorVersions/all`, [], 'GET', { name, hasBaseModels, version, isActive });
    }

    async get(baseModelId: string): Promise<SimulatorVersions> {
        return await apiRequest<SimulatorVersions>(`v2/simulatorVersions/${baseModelId}`, null, 'GET', { id: baseModelId });
    }
}