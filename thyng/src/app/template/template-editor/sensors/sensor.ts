import { DataType } from './data-type.enum';

export interface Sensor {
    id?: string;
    name: string;
    unit: string;
    dataType: DataType;
}
