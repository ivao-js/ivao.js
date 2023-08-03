import { data } from './utils/index';
import { options } from './types/index';
import { OAuthClientCredentials } from './utils/oauth2/client-credentials';
declare let userClient: Client;
export declare class Client {
    options: options;
    oauth2: OAuthClientCredentials;
    constructor(options: options);
    data: data;
}
export { userClient };
