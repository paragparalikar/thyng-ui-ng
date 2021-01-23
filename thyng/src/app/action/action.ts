import { ActionType } from './action-type.enum';

export interface Action {
    id?: string;
    enabled: boolean;
    actionType: ActionType;
    name: string;
    rateLimit: number;

    to?: string[];
    subject?: string;
    content?: string;
}
