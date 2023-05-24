import { data } from './utils/index';
import { options } from './types/index';

let userClient: Client;

export class Client {
    constructor(public options: options) {
        userClient = this;
    };

    public data = new data();
}

export { userClient };