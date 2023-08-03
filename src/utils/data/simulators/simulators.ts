import { Simulators } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class simulators {
    constructor() {}; 

    async all(name: string, isActive?: boolean): Promise<Simulators[]> {
        return await apiRequest<Simulators[]>(`v2/simulators/all`, [], 'GET', { name, isActive });
    }

    async get(simulatorId: string): Promise<Simulators> {
        return await apiRequest<Simulators>(`v2/simulators/${simulatorId}`, null, 'GET', { id: simulatorId });
    }
}