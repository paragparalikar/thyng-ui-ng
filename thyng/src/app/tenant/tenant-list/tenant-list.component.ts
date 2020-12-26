import { Component, OnInit } from "@angular/core";
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: "app-tenant-list",
  templateUrl: "./tenant-list.component.html",
  styles: [],
})
export class TenantListComponent implements OnInit {

  errorMessage: string = '';
  isLoading: boolean = true;
  tenants: Tenant[] = [];

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenantService.findAll().subscribe(
      data => {
        this.tenants = data;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.errorMessage = "Failed to load data, please check internet connection";
      }
    );
  }
  
}
