import { ThingStatus } from './thing-status.enum';

export interface Thing {
    id: string;
    name: string;
    status: ThingStatus;
    inactivityPeriod: number;
    attributes: Map<string, string>;
}
