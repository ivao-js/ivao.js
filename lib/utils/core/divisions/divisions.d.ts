/// <reference types="node" />
import { Division, DivisionLanguage } from '../../../types/core';
export declare class divisions {
    constructor();
    get(divisionId: string): Promise<Division>;
    getLanguages(divisionId: string): Promise<DivisionLanguage[]>;
    getSvgLogo(divisionId: string): Promise<Buffer>;
    getAiaLogo(divisionId: string): Promise<Buffer>;
}
