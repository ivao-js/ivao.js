import { Method } from 'axios';
import { PathLike } from 'fs';
export declare const apiRequest: <T>(path: string, defaultValue: T, method?: Method, params?: {}, body?: {}) => Promise<T>;
export declare const apiDownload: (URLPath: string, DOCPath: PathLike, defaultValue: any, fileName: string) => Promise<void>;
