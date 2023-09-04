import { data, core } from './utils/index';
import { options } from './types/index';
import { OAuthClientCredentials } from './utils/oauth2/client-credentials';
import { ClientCredentials } from 'simple-oauth2';

let userClient: Client;

export class Client {
    public oauth2: OAuthClientCredentials;

    constructor(public options: options) {
        if(options.type === 'oauth2') {
            this.oauth2 = new ClientCredentials({
                client: {
                    id: options.client_id,
                    secret: options.secret_id,
                },
                auth: {
                    tokenHost: `https://api.ivao.aero`,
                    tokenPath: '/v2/oauth/token',
                    revokePath: '/v2/oauth/token/revoke',
                },
                options: {
                    bodyFormat: 'json',
                }
            });
        }

        userClient = this;
    };

    public data = new data();
    public core = new core();
}

export { userClient };