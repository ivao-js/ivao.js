import { Language } from '../data';
export interface DivisionLanguage {
    id: number;
    languageId: string;
    divisionId: string;
    isNative: boolean;
    language: Language;
}
export interface Division {
    id: string;
    name: string;
    web: string;
    mcd: string;
    status: boolean;
    svgLogo: string;
    aiaLogo: string;
    forumSlug: null | any;
}
