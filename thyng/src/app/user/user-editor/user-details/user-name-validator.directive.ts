import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Directive({
  selector: '[appUserNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: UserNameValidatorDirective, multi: true}
  ]
})
export class UserNameValidatorDirective implements AsyncValidator {

  @Input() id?: string;

  constructor(private userService: UserService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appUserNameValidator: 'User with this name already exists'} : null)
    );
  }

}
