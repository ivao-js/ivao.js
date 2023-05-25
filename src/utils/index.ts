import {
    aircraft,
    airlines,
    airports,
    atcPositions
} from './data/index';

export class data {
    constructor() {};

    public aircraft = new aircraft();
    public airlines = new airlines();
    public airports = new airports();
    public atcPositions = new atcPositions();
}