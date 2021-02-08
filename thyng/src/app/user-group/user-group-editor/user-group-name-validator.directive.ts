import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserGroupService } from '../user-group.service';

@Directive({
  selector: '[appUserGroupNameValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: UserGroupNameValidatorDirective, multi: true}
  ]
})
export class UserGroupNameValidatorDirective implements AsyncValidator {

  @Input() id?: string;

  constructor(private userGroupService: UserGroupService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userGroupService.existsByName(this.id ? this.id : '0', control.value).pipe(
      map(result => result ? {appUserGroupNameValidator: 'User Group with this name already exists'} : null)
    );
  }

}
