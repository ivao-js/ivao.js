import { data } from './utils/index';
import { options } from './types/index';

export class Client {
    constructor(public options: options) {};

    public data: data;
}