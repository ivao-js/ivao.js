export * from './aircrafts';
export * from './airlines';
export * from './airports';
export * from './atcPositions';
export * from './centers';
export * from './countries';
export * from './creators';
export * from './languages';
export * from './navaids';

export interface BaseUser {
    id: number;
    firstName: string;
    lastName: string;
    divisionId: string;
    rating: UserRating
}

export interface UserRating {
    isAtc: boolean;
    isPilot: boolean;
    pilotRating: BaseRating;
    atcRating: BaseRating;
}

export interface BaseRating {
    id: number;
    name: string;
    shortName: string;
    description: string;
}