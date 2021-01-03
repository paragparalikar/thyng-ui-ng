import { EventType } from './event-type.enum';
import { Language } from './language.enum';

export interface Trigger {
    id?: number;
    name: string;
    enabled: boolean;
    language: Language;
    eventType: EventType;
    window?: Window;
    thingSelectionScript: string;
    evaluationScript: string;
}
