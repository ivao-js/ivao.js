interface RunwayDto {
    id: number;
    airportIcao: string;
    length: string;
    bearing: string;
    latitude: number;
    longitude: number;
    elevation: number;
    width: number;
}
export declare class runways {
    constructor();
    get(id: string): Promise<RunwayDto>;
}
export {};
