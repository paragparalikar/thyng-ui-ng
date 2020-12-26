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

  constructor(
    private route: ActivatedRoute,
    private tenantService: TenantService) { }

  ngOnInit(): void {
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

}
