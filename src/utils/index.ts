import {
    aircraft,
    airlines,
    airports,
    atcPositions,
    centers,
    countries,
    languages,
    navaids
} from './data/index';

export class data {
    constructor() {};

    public aircraft = new aircraft();
    public airlines = new airlines();
    public airports = new airports();
    public atcPositions = new atcPositions();
    public centers = new centers();
    public countries = new countries();
    public languages = new languages();
    public navaids = new navaids();
}