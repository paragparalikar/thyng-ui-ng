import { Language } from '../shared/language.enum';
import { ThingGroupType } from './thing-group-type.enum';

export interface ThingGroup {
    id?: string;
    name: string;
    type: ThingGroupType;
    script?: string;
    language?: Language;
    thingIds?: string[];
    templateIds?: string[];
}
