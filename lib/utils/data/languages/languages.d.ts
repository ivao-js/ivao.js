import { Language } from '../../../types/data';
export declare class languages {
    constructor();
    get(languageId: string): Promise<Language>;
}
