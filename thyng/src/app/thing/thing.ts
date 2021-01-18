import { Attribute } from '../template/attribute';
import { ThingStatus } from './thing-status.enum';

export interface Thing {
    id?: string;
    name: string;
    templateId: string;
    status: ThingStatus;
    inactivityPeriod: number;
    attributes: Attribute[];
}
