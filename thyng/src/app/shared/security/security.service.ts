import { Injectable } from '@angular/core';
import { User } from '../../user/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private _currentUser: User = {
    id: 'dummyId',
    email: 'parag.paralikar@gmail.com',
    firstName: 'Parag',
    lastName: 'Paralikar',
    username: 'paragparalikar',
    tenantId: '13d37e61-9065-4481-8799-a5ba47d66a93'
  };

  constructor() { }

  get currentUser(): User{
    return this._currentUser;
  }

}
