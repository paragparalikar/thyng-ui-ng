import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Sensor } from './sensor';

@Directive({
  selector: '[appSensorNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: SensorNameValidatorDirective, multi: true}]
})
export class SensorNameValidatorDirective implements Validator{

  @Input() sensors: Sensor[] = [];
  formControl?: AbstractControl;

  validate(control: AbstractControl): ValidationErrors | null {
    this.formControl = control;
    let count: number = this.sensors
      .map(attribute => attribute.name)
      .filter(name => name === control.value)
      .length;
    return 1 < count ? {appSensorNameValidator: 'Duplicate name'} : null;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup($event: KeyboardEvent) {
    this.formControl?.updateValueAndValidity();
  }

}
