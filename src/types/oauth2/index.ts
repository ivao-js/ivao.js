export class OAuth2AccessToken {
    token: {
        access_token: string;
        token_type: string;
        expires_in: number;
        expires_at: Date;
    }
    expired: (expirationWindowInSeconds: number) => boolean;
}