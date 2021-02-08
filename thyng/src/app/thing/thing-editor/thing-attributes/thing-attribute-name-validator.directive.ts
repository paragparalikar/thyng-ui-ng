import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Attribute } from 'src/app/shared/attribute';

@Directive({
  selector: '[appThingAttributeNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ThingAttributeNameValidatorDirective, multi: true}]
})
export class ThingAttributeNameValidatorDirective implements Validator {

  @Input() attributes: Attribute[] = [];
  formControl?: AbstractControl;

  validate(control: AbstractControl): ValidationErrors | null {
    this.formControl = control;
    let count: number = this.attributes
      .map(attribute => attribute.name)
      .filter(name => name === control.value)
      .length;
    return 1 < count ? {appThingAttributeNameValidator: 'Duplicate name'} : null;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup($event: KeyboardEvent) {
    this.formControl?.updateValueAndValidity();
  }

}
