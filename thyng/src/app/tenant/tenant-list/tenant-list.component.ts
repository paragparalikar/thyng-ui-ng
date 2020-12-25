import { Component, OnInit } from "@angular/core";
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: "app-tenant-list",
  templateUrl: "./tenant-list.component.html",
  styles: [],
})
export class TenantListComponent implements OnInit {

 

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    
  }
  
}
