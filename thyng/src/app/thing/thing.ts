import { ThingStatus } from './thing-status.enum';

export interface Thing {
    id?: number;
    name: string;
    status: ThingStatus;
    inactivityPeriod: number;
    attributes: Map<string, string>;
}
