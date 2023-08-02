export interface apiOption {
    type: 'apiKey';
    apiKey: string;
}
export interface oauthOption {
    type: 'oauth2';
    client_id: string;
    secret_id: string;
}
export type options = apiOption | oauthOption;
