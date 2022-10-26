import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  constructor(
    private _userService: UserService
  ) {
    this.user = new User(1, '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
