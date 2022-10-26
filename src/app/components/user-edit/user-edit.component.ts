import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { global } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  public user: User
  public identity: any;
  public token: any;
  public status: any;
  public url: any;

  constructor(
    private _userService: UserService
  ) { 
    this.user = new User(1, '', '','','','','','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
    this.user = new User(
      this.identity.sub,
      this.identity.nombre,
      this.identity.apaterno,
      this.identity.amaterno,
      this.identity.telefono,
      this.identity.fecha_nacimiento,
      this.identity.email,
      this.identity.password
    );
    console.log(this.user);
  }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this._userService.update(this.token, this.user).subscribe(
      response => {
        if (response && response.status) {
          this.status = 'success';
          this.identity = this.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
}
