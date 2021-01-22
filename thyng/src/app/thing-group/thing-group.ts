import { Language } from '../shared/language.enum';

export interface ThingGroup {
    id?: string;
    name: string;
    script?: string;
    language?: Language;
}
