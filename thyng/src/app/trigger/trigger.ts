import { EventType } from '../shared/event-type.enum';
import { Language } from '../shared/language.enum';

export interface Trigger {
    id?: string;
    name: string;
    enabled: boolean;
    eventType: EventType;

    language: Language;
    thingSelectionScript: string;
    evaluationScript: string;
    
    window?: Window;
}
