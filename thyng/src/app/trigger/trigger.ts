import { EventType } from '../shared/event-type.enum';
import { Language } from '../shared/language.enum';
import { EvaluationWindow } from './window/evaluation-window';

export interface Trigger {
    id?: string;
    name: string;
    enabled: boolean;
    eventType: EventType;

    script: string;
    language: Language;
    includeEvents: boolean;
    includeAggregations: boolean;
    
    actionIds: string[];
    thingGroupIds: string[];
    window?: EvaluationWindow;
}
