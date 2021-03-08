import { Sensor } from '../sensor/sensor';
import { Thing } from '../thing/thing';

export interface Channel {
    channel: string;
    thing?: Thing;
    thingId?: string;
    sensor?: Sensor;
    sensorId?: string;
}
