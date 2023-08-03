import { Method } from 'axios';
export declare const apiRequest: <T>(path: string, defaultValue: T, method?: Method, params?: {}, body?: {}) => Promise<T>;
