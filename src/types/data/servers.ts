export interface Servers {
    id: string;
    hostname: string;
    description: string;
    type: string;
    ip: string;
    countryId: string;
    currentConnections: number;
    maximumConnections: number;
    active: boolean;
    order: number;
    pingedAt: string;
}