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
    manufacture: AircraftManufacture;
}
export interface AircraftEquipment {
    id: string;
    name: string;
    order: number;
    isActive: boolean;
}
export interface AircraftVariant {
    id: number;
    aircraftId: string;
    name: string;
    type: string;
    fullId: string;
}
export interface Aircraft {
    icao: string;
    iata: string;
    model: string;
    manufactureId: number;
    manufacture: AircraftManufacture;
    description: string;
    wakeTurbulence: string;
    engineId: number;
    numberEngines: number;
    military: boolean;
}
