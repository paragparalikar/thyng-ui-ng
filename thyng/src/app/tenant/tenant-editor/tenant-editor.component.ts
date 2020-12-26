import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tenant } from '../tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-editor',
  templateUrl: './tenant-editor.component.html',
  styles: [
  ]
})
export class TenantEditorComponent implements OnInit {

  tenant: Tenant = {
    id: '',
    name: '',
    enabled: false
  };
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private tenantService: TenantService) { }

  ngOnInit(): void {
    this.tenant = {
    id: '',
    name: '',
    enabled: false
    };
    this.errorMessage = undefined;
    this.successMessage = undefined;
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.tenantService.findById(id).subscribe(
        data => {
          this.tenant = data;
          this.errorMessage = '';
        },
        error => this.errorMessage = "Failed to load data, please check internet connection"
      );
    }else{
      this.errorMessage = 'Tenant key is absent is url';
    }
  }

  save(){
    this.tenantService.save(this.tenant).subscribe(
      data => {
        console.log(data);
        this.tenant = data;
        this.errorMessage = undefined;
        this.successMessage = 'Tenant information saved successfully';
      },
      error => {
        console.log(error);
        this.successMessage = undefined;
        this.errorMessage = 'Failed to save data, please check internet connection';
      }
    );
  }
}
