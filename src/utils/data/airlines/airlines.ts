import { Airlines } from '../../../types/data';
import { apiRequest } from '../../apiRequest';

export class airlines {
    constructor() {};

    async get(airlineIcao: string): Promise<Airlines> {
        return await apiRequest<Airlines>(`v2/airlines/${airlineIcao}`, null, 'GET');
    }

    async all(): Promise<Airlines[]> {
        return await apiRequest<Airlines[]>(`v2/airlines/all`, null, 'GET');
    }

    async logo(airlineIcao: string): Promise<Buffer> {
        return await apiRequest<Buffer>(`v2/airlines/${airlineIcao}/logo`, null, 'GET').then((data) => {
            let buffer = Buffer.from(data);
            let str = buffer.toString();

            buffer = Buffer.from(str);
    
            return buffer;
        });
    }
}