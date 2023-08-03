import { data } from './utils/index';
import { options } from './types/index';
import { OAuthClientCredentials } from './utils/oauth2/client-credentials';

let userClient: Client;

export class Client {
    public oauth2: OAuthClientCredentials;

    constructor(public options: options) {
        if(options.type === 'oauth2') {
            this.oauth2 = new OAuthClientCredentials({
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
}

export { userClient };