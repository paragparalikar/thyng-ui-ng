import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThingGroupService } from '../thing-group.service';

@Directive({
  selector: '[appThingGroupNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: ThingGroupNameValidatorDirective, multi: true}
]
})
export class ThingGroupNameValidatorDirective implements AsyncValidator {

  @Input() id?: string;

  constructor(private thingGroupService: ThingGroupService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.thingGroupService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appThingGroupNameValidator: 'Thing Group with this name already exists'} : null)
    );
  }

}
