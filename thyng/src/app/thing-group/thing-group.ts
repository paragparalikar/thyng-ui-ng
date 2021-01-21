export interface ThingGroup {
    id?: string;
    name: string;
    type: string;
    script?: string;
    language?: string;
    thingIds?: string[];
    templateIds?: string[];
}
