export interface Center {
    id: number;
    name: string;
    countryId: string;
    military: boolean;
    frequency: number;
    regionMap: object[];
    regionMapPolygon: object[];
}
export interface SpecialAreas {
    id: number;
    type: string;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    dayMon: boolean;
    dayTue: boolean;
    dayWed: boolean;
    dayThu: boolean;
    dayFri: boolean;
    daySat: boolean;
    daySun: boolean;
    centers: string[];
    activationDetails: string;
    minimumAlt: number;
    maximumAlt: number;
    range: boolean;
    regionMap: object[];
    regionMapPolygon: object[];
}
export interface BaseCenter {
    id: number;
    name: string;
    countryId: string;
    military: boolean;
}
export interface BaseSubcenter {
    id: number;
    centerId: string;
    atcCallsign: string;
    middleIdentifier: string;
    position: string;
    composePosition: string;
}
