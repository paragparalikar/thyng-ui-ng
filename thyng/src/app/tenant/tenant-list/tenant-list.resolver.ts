import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, ObservableInput, of } from 'rxjs';
import { GlobalMessageService } from 'src/app/shared/global-message/global-message.service';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenantListResolver implements Resolve<Tenant[]> {

  constructor(private tenantService: TenantService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tenant[]> {
    return this.tenantService.findAll();
  }

}
