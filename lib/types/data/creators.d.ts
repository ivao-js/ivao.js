import { BaseUser } from '.';
export interface Creator {
    userId: number;
    description: string;
    tier: number;
    user: BaseUser;
}
