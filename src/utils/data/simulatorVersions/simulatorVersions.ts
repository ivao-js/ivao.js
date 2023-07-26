import axios from 'axios';
import { userClient } from '../../..';
import { SimulatorVersions } from '../../../types/data';

export class simulatorVersions {
    constructor() {}; 

    async all(name?: string, hasBaseModels?: boolean, version?: string, isActive?: boolean): Promise<SimulatorVersions[]> {
        return await axios.get<SimulatorVersions[]>(`https://api.ivao.aero/v2/simulatorVersions/all`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                name,
                hasBaseModels,
                version,
                isActive,
            },
            responseType: 'json',
        }).then(data => data.data);
    }

    async get(baseModelId: string): Promise<SimulatorVersions> {
        return await axios.get<SimulatorVersions>(`https://api.ivao.aero/v2/simulatorVersions/${baseModelId}`, {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': userClient.options.apiKey
            },
            params: {
                id: baseModelId
            },
            responseType: 'json',
        }).then(data => data.data);
    }
}