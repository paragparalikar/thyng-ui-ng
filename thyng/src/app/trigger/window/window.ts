import { WindowBase } from './window-base.enum';
import { WindowType } from './window-type.enum';

export interface Window {
    base: WindowBase;
    type: WindowType;
    tumblingInterval: number;
    slidingInterval: number;
}
