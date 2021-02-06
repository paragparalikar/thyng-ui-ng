import { ClrDatagridStateInterface } from '@clr/angular';

export class Pagination<T> {
    page: Page = new Page();
    items: T[] = [];
    sort: Sort = new Sort();
    filter: Filter[] = [];

    constructor(state: ClrDatagridStateInterface) {
        this.page.from = state.page?.size! * (state.page?.current! - 1);
        if(state.sort) {
            this.sort = <{ by: string; reverse: boolean }>state.sort;
        }
        if(state.filters) {
            for(let filter of state.filters!){
                this.filter.push(<{ property: string; value: string }>filter);
            }
        }
    }
}

export class Page {
    from: number = 0;
    size: number = 10;
    total: number = 10;
}

export class Sort {
    by: string = 'name';
    reverse: boolean = false;
}

export interface Filter {
    property: string;
    value: string;
}
