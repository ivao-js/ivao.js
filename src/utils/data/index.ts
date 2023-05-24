import { aircraftManufacture } from './aircraftManufacture';
import { aircraftEquipment } from './aircraftEquipment';
import { aircraftTransponderTypes } from './aircraftTransponderTypes';
import { aircrafts } from './aircrafts';
import { Client } from '../..';

export class aircraft {
    constructor() {};

    public aircraftManufacture = new aircraftManufacture();
    public aircraftEquipment = new aircraftEquipment();
    public aircraftTransponderTypes = new aircraftTransponderTypes();
    public aircrafts = new aircrafts();
}

export { airlines } from './airlines';