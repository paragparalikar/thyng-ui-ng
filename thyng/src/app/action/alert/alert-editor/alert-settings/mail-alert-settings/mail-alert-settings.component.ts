import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Action } from 'src/app/action/action';
import { UserGroup } from 'src/app/user-group/user-group';
import { UserGroupService } from 'src/app/user-group/user-group.service';

@Component({
  selector: 'app-mail-alert-settings',
  templateUrl: './mail-alert-settings.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MailAlertSettingsComponent implements OnInit {

  userGroups: UserGroup[] = [];
  selectedUserGroups: UserGroup[] = [];
  @Input() action!: Action;
  @Input() readOnly!: boolean;

  constructor(private userGroupService: UserGroupService) { }

  ngOnInit(): void {
    this.userGroupService.findAll().subscribe(
      userGroups => {
        this.userGroups = userGroups;
        this.selectedUserGroups = userGroups.filter(
            userGroup => this.action.userGroupIds?.includes(userGroup.id!));
      }
    );
  }

  onUserGroupSelectionChanged(userGroups: UserGroup[]){
    this.selectedUserGroups = userGroups;
    this.action.userGroupIds = userGroups.map(userGroup => userGroup.id!);
  }

}
