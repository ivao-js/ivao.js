import { data } from './utils/index';
import { options } from './types/index';
declare let userClient: Client;
export declare class Client {
    options: options;
    constructor(options: options);
    data: data;
}
export { userClient };
