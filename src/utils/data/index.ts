import { aircraftManufacture } from './aircrafts/aircraftManufacture';
import { aircraftEquipment } from './aircrafts/aircraftEquipment';
import { aircraftTransponderTypes } from './aircrafts/aircraftTransponderTypes';
import { aircrafts } from './aircrafts/aircrafts';

export class aircraft {
    constructor() {};

    public aircraftManufacture = new aircraftManufacture();
    public aircraftEquipment = new aircraftEquipment();
    public aircraftTransponderTypes = new aircraftTransponderTypes();
    public aircrafts = new aircrafts();
}

export { airlines } from './airlines/airlines';
export { airports } from './airports/airports';
export { atcPositions } from './atcPositions/atcPositions';
export { centers } from './centers/centers';
export { countries } from './countries/countries';
export { creators } from './creators/creators';
export { divisions } from './divisions/divisions';
export { languages } from './languages/languages';
export { navaids } from './navaids/navaids';
export { subcenters } from './subcenters/subcenters';
export { runways } from './runways/runways';
export { sectors } from './sectors/sectors';
export { servers } from './servers/servers';
export { simulators } from './simulators/simulators';
export { simulatorVersions } from './simulatorVersions/simulatorVersions';
export { softwares } from './softwares/softwares';
export { specialAreas } from './specialAreas/specialAreas';
export { squawks } from './squawks/squawks';
export { virtualAirlines } from './virtualAirlines/virtualAirlines';
export { motds } from './motds/motds';