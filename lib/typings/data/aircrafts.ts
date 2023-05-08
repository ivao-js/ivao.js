export interface AircraftManufacture {
    id: number;
    name: string;
}

export interface AircraftsEquipment {
    id: number;
    name: string;
    order: number;
    active: boolean;
}

export interface AircraftTransponderType {
    id: number;
    name: string;
    order: number;
    type: number;
}

export interface BaseAircraft {
    icao: string;
    iata: string;
    model: string;
    manufactureId: number;
    manufacture: AircraftManufacture
}