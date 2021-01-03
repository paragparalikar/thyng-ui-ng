import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AttributesTransformer {

    from(map?: Map<string, string>): string {
        if(map) return Array.from(map, (key, value) => key + '=' + value).join('\n');
        else return '';
    }

    to(text?: string): Map<string, string> {
        const map = new Map<string, string>();
        if(text){
            return text.split("\n").reduce((map, curr) => {
                let pair =  curr.split("=");
                map.set(pair[0], pair[1]);
                return map;
            }, map);            
        }
        return map;
    }

}
