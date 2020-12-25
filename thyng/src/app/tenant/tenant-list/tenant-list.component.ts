import { Component, OnInit } from "@angular/core";
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: "app-tenant-list",
  templateUrl: "./tenant-list.component.html",
  styles: [],
})
export class TenantListComponent implements OnInit {

  columnDefs = [ 
    { field: "name", maxWidth: 150, sortable: true, filter: true}, 
    { field: "enabled", maxWidth: 100, sortable: true, filter: true},
    { field: "id", minWidth: 250, sortable: true, filter: true}];

  rowData: any = [];

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenantService.findAll().subscribe(data => this.rowData = data);
  }
  
}
