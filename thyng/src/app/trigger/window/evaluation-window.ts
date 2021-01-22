import { WindowBase } from './window-base.enum';
import { WindowType } from './window-type.enum';

export interface EvaluationWindow {
    base: WindowBase;
    type: WindowType;
    span: number;
    timeout: number;
    slidingSpan: number;
}
