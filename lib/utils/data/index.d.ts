import { aircraftManufacture } from './aircraftManufacture';
import { aircraftEquipment } from './aircraftEquipment';
import { aircraftTransponderTypes } from './aircraftTransponderTypes';
import { aircrafts } from './aircrafts';
export declare class aircraft {
    constructor();
    aircraftManufacture: aircraftManufacture;
    aircraftEquipment: aircraftEquipment;
    aircraftTransponderTypes: aircraftTransponderTypes;
    aircrafts: aircrafts;
}
export * as airlines from './airlines';
