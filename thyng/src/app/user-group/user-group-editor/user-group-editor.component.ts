import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { UserGroup } from '../user-group';
import { UserGroupService } from '../user-group.service';

@Component({
  selector: 'app-user-group-editor',
  templateUrl: './user-group-editor.component.html',
  styles: [
  ]
})
export class UserGroupEditorComponent implements OnInit {

  header: string = 'Create New User Group';
  userGroup: UserGroup;
  readOnly: boolean = false;
  message?: Message;

  constructor(private route: ActivatedRoute,
              private userGroupService: UserGroupService) {
    this.userGroup = userGroupService.buildDefault();
  }

  ngOnInit(): void {
    this.message = undefined;
    this.route.paramMap.subscribe(
      map => {
        this.userGroupService.findById(map.get('userGroupId')!).subscribe(
          userGroup => {
            this.userGroup = userGroup;
            this.header = userGroup?.id ? `Edit User Group ${userGroup.name}` : 'Create New User Group'; 
          }
        );
      }
    );
  }

  save(): void {
    if(this.userGroup) {
      this.userGroupService.save(this.userGroup).subscribe(
        userGroup => {
          this.userGroup = userGroup;
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `User Group ${this.userGroup?.name} has been saved successfully`
          };
        }
      );
    }
  }

}
