
import { apiRequest } from '../../apiRequest';
import { Division, DivisionLanguage } from '../../../types/core';

export class divisions {
    constructor() {};

    async get(divisionId: string): Promise<Division> {
        return await apiRequest<Division>(`v2/divisions/${divisionId}`, null, 'GET');
    }

    async getLanguages(divisionId: string): Promise<DivisionLanguage[]> {
        return await apiRequest<DivisionLanguage[]>(`v2/divisions/${divisionId}/languages`, [], 'GET');
    }

    async getSvgLogo(divisionId: string): Promise<Buffer> {
        return await apiRequest<Buffer>(`v2/divisions/${divisionId}/svgLogo`, null, 'GET').then((data) => {
            let buffer = Buffer.from(data);
            let str = buffer.toString();

            buffer = Buffer.from(str);
    
            return buffer;
        }).catch((_) => {
            throw new Error('The image is not available for this division');
        });
    }

    async getAiaLogo(divisionId: string): Promise<Buffer> {
        return await apiRequest<Buffer>(`v2/divisions/${divisionId}/aiaLogo`, null, 'GET').then((data) => {
            let buffer = Buffer.from(data);
            let str = buffer.toString();

            buffer = Buffer.from(str);
    
            return buffer;
        }).catch((_) => {
            throw new Error('The image is not available for this division');
        });
    }
}