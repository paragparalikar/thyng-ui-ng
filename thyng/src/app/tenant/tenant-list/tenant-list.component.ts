import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { Message } from 'src/app/shared/message';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({templateUrl: "./tenant-list.component.html"})
export class TenantListComponent implements OnInit {

  message?: Message;
  tenants: Tenant[] = [];

  constructor(private route: ActivatedRoute,
              private confirDialogService: ConfirmDialogService,
              private tenantService: TenantService) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.tenants = data.tenants;
        this.message = undefined;
      }
    );
  }

  delete(tenant: Tenant){
    this.confirDialogService.show({
      buttonClasses: 'btn-danger',
      buttonText: 'Delete',
      iconClasses: 'is-danger',
      iconShape: 'exclamation-triangle',
      text: `Are you sure you want to delete tenant ${tenant.name}?`
    }).subscribe(
      confirm => {
        if(confirm) this._delete(tenant);
      }      
    );
  }

  private _delete(tenant: Tenant): void{
    this.tenantService.delete(tenant.id).subscribe(
      () => {
        this.message = {
          text: `Tenant ${tenant.name} has been deleted successfully`,
          iconShape: 'check',
          styleClasses: 'alert-success'
        };
        this.tenants.splice(this.tenants.indexOf(tenant), 1);
      },
      () => {
        this.message = {
          text: `Failed to delete tenant ${tenant.name}`,
          iconShape: 'exclamation-triangle',
          styleClasses: 'alert-danger'
        };
      }
    );
  }
}
