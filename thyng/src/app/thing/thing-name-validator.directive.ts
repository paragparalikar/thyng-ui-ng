import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThingService } from './thing.service';

@Directive({
  selector: '[appThingNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: ThingNameValidatorDirective, multi: true}
  ]
})
export class ThingNameValidatorDirective implements AsyncValidator {

  @Input() id?: string;

  constructor(private thingService: ThingService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.thingService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appThingNameValidator: 'Thing with this name already exists'} : null)
    );
  }

}
