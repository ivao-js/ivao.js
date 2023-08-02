import { data } from './utils/index';
import { options } from './types/index';
import { ClientCredentials } from 'simple-oauth2';
declare let userClient: Client;
export declare class Client {
    options: options;
    oauth2: ClientCredentials;
    constructor(options: options);
    data: data;
}
export { userClient };
