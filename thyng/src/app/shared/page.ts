export interface Page<T> {
    from: number;
    size: number;
    total: number;
    items: T[];
    sort: Sort[];
    filter: Filter[];
}

export interface Sort {
    by: string;
    reverse: boolean;
}

export interface Filter {
    property: string;
    value: string;
}