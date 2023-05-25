import { Client } from '..';
import { aircraft, airlines, airports } from './data/index';

export class data {
    constructor() {};

    public aircraft = new aircraft();
    public airlines = new airlines();
    public airports = new airports();
}