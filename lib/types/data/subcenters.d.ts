import { BaseCenter } from './centers';
export interface Subcenter {
    id: number;
    centerId: string;
    atcCallsign: string;
    middleIdentifier: string;
    position: string;
    composePosition: string;
    military: boolean;
    frequency: number;
    regionMap: object[];
    regionMapPolygon: object[];
    latitude: number;
    longitude: number;
    center: BaseCenter;
}
