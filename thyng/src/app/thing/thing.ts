import { Attribute } from '../shared/attribute';
import { Actuator } from './thing-editor/actuators/actuator';
import { Sensor } from './thing-editor/sensors/sensor';

export interface Thing {
    id?: string;
    name: string;
    inactivityPeriod: number;
    attributes: Attribute[];
    sensors: Sensor[];
    actuators: Actuator[];
}
