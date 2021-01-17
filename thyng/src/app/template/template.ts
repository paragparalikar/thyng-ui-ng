import { Actuator } from './template-editor/actuators/actuator';
import { Sensor } from './template-editor/sensors/sensor';

export interface Template {
    id?: string;
    name: string;
    attributes: any;
    inactivityPeriod: number;
    sensors: Sensor[];
    actuators: Actuator[];
}
