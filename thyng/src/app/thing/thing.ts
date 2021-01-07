import { Actuator } from './thing-editor/actuators/actuator';
import { Sensor } from './thing-editor/sensors/sensor';
import { ThingStatus } from './thing-status.enum';

export interface Thing {
    id?: string;
    name: string;
    status: ThingStatus;
    inactivityPeriod: number;
    attributes: any;
    sensors: Sensor[];
    actuators: Actuator[];
}
