import { Client } from '..';
import { aircraft, airlines } from './data/index';

export class data {
    constructor() {};

    public aircraft = new aircraft();
    public airlines = new airlines();
}