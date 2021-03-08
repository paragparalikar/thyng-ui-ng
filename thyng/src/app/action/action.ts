import { ActionType } from './action-type.enum';
import { AlertType } from './alert/alert-type.enum';

export interface Action {
    id?: string;
    enabled: boolean;
    type: ActionType;
    name: string;
    throttlingPeriod: number;

    alertType?: AlertType;
    userGroupIds?: string[];
    subject?: string;
    content?: string;
}
