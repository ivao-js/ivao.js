import { aircraftManufacture } from './aircraftManufacture';
import { aircraftEquipment } from './aircraftEquipment';
import { aircraftTransponderTypes } from './aircraftTransponderTypes';
import { aircrafts } from './aircrafts';

export class aircraft {
    constructor() {};

    public aircraftManufacture: aircraftManufacture;
    public aircraftEquipment: aircraftEquipment;
    public aircraftTransponderTypes: aircraftTransponderTypes;
    public aircrafts: aircrafts;
}

export * as airlines from './airlines';