import { Component, OnInit } from "@angular/core";
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: "app-tenant-list",
  templateUrl: "./tenant-list.component.html",
  styles: [],
})
export class TenantListComponent implements OnInit {

  errorMessage: string | undefined;
  successMessage: string | undefined;
  isLoading: boolean = true;
  tenants: Tenant[] = [];
  isModalVisible: boolean = false;
  deletableTenant: Tenant | undefined;

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenants = [];
    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.tenantService.findAll().subscribe(
      data => {
        this.tenants = data;
        this.isLoading = false;
        this.errorMessage = undefined;
        this.successMessage = undefined;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.successMessage = undefined;
        this.errorMessage = "Failed to load data, please check internet connection";
      }
    );
  }

  confirmDelete(tenant: Tenant){
    this.deletableTenant = tenant;
    this.isModalVisible = true;
  }

  delete(): void{
    this.isModalVisible = false;
    if(this.deletableTenant){
      const tenant = this.deletableTenant;
      this.tenantService.delete(tenant.id).subscribe(
        success => {
          this.errorMessage = undefined;
          this.tenants.splice(this.tenants.indexOf(tenant), 1);
          this.successMessage = `Tenant ${tenant.name} has been deleted successfully`;
        },
        error => {
          this.successMessage = undefined;
          this.errorMessage = `Failed to delete tenant ${tenant.name}`;
        }
      );
    }
  }
  
}
