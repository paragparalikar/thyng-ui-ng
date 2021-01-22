import { Component, Input} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Trigger } from '../../trigger';
import { EvaluationWindow } from '../../window/evaluation-window';
import { WindowBase } from '../../window/window-base.enum';
import { WindowType } from '../../window/window-type.enum';

@Component({
  selector: 'app-trigger-window',
  templateUrl: './trigger-window.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TriggerWindowComponent {

  window: EvaluationWindow;
  _trigger!: Trigger;
  @Input() readOnly: boolean = false;
  WindowBase = WindowBase;
  WindowType = WindowType;

  constructor(){
    this.window = {
      base: WindowBase.TIME,
      type: WindowType.SLIDING,
      span: 1800,
      timeout: 1800,
      slidingSpan: 300
    };
  }

  @Input()
  set trigger(trigger: Trigger) {
    this._trigger = trigger;
    this.window = trigger.window? trigger.window : this.window;
  }

  
  

}
