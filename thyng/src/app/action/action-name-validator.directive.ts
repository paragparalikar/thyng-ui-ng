import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionService } from './action.service';

@Directive({
  selector: '[appActionNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: ActionNameValidatorDirective, multi: true}
  ]
})
export class ActionNameValidatorDirective implements AsyncValidator {

  @Input() id?: string;

  constructor(private actionService: ActionService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.actionService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appActionNameValidator: 'Action with this name already exists'} : null)
    );
  }

}
