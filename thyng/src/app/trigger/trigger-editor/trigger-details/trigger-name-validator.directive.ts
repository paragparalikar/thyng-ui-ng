import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TriggerService } from '../../trigger.service';

@Directive({
  selector: '[appTriggerNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: TriggerNameValidatorDirective, multi: true}
  ]
})
export class TriggerNameValidatorDirective  implements AsyncValidator {

  @Input() id?: string;

  constructor(private triggerService: TriggerService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.triggerService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appTriggerNameValidator: 'Trigger with this name already exists'} : null)
    );
  }
}
