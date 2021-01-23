import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/message';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styles: [
  ]
})
export class UserEditorComponent implements OnInit {

  user: User;
  message?: Message;
  readOnly: boolean = false;
  header: string = 'Create New User';

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    this.user = userService.buildDefault();
  }

  ngOnInit(): void {
    this.message = undefined;
    this.route.paramMap.subscribe(
      map => {
        this.userService.findById(map.get('userId')!).subscribe(
          user => {
            this.user = user;
            this.header = user?.id ? `Edit ${user.name}` : 'Create New User';
          }
        );
      }
    );
  }

  save(){
    if(this.user){
      this.userService.save(this.user).subscribe(
        user => {
          this.user = user;
          this.message = {
            iconShape: 'check',
            styleClasses: 'alert-success',
            text: `User ${this.user?.name} has been saved successfully`
          };
        }
      );
    }
  }

}
