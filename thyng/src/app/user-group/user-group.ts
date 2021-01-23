import { Language } from '../shared/language.enum';

export interface UserGroup {
    id?: string;
    name: string;
    language: Language;
    script: string;
}
