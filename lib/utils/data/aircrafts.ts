import axios from 'axios';
import {
    AircraftManufacture as AircraftManufactureDto
} from '../../typings/data/index';

export const aircraftManufacture = async(
    type: 'basic' | 'id',
    key: string,
    name?: string | null,
    id?: number | null,
    params?: {}
): Promise<AircraftManufactureDto | AircraftManufactureDto[]> => {
    switch(type) {
        case 'basic': {
            return await axios.get<AircraftManufactureDto[] | AircraftManufactureDto>('https://api.ivao.aero/v2/aircrafts/manufacturers', {
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': key
                },
                responseType: 'json',
                params: name ? { 'name': name } : params
            }).then(data => data.data);
        }

        case 'id': {
            return await axios.get<AircraftManufactureDto>(`https://api.ivao.aero/v2/aircrafts/manufacturers/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': key
                },
                responseType: 'json',
            }).then(data => data.data);
        }
    }
}