export interface BaseVirtualAirline {
    id: number;
    airlineId: string;
    website: string;
}

export interface MixedVirtualAirline {
    id: number;
    airlineId: string;
    ceoVid: number;
    website: string;
    name: string;
    divisionId: string;
    status: number;
    airline: object;
}

export interface VirtualAirline extends BaseVirtualAirline {
    ceoVid: number;
    ceoName: string;
    ceoMail: string;
}