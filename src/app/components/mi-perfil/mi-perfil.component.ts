import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";
import { User } from 'src/app/models/user';
import { global } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
  providers : [UserService]
})
export class MiPerfilComponent implements OnInit {
  public identity:any;
  public token:any;
  public status: any;
  public user : User|any;
  public url: any;

  constructor(
    private _userService:UserService,
    private _router: Router
  ) { 
    this.loaduser();
 
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
      this.identity.password,
    );
    console.log(this.user);
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.loaduser();
 
  }
  loaduser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  //Eliminamos el usuario del sitio ya
  deletePost(email:any){
    this._userService.delete(this.token,this.user.email).subscribe(
        response => {
            this.user.email;
            localStorage.removeItem('identity');
            localStorage.removeItem('token');
            this._router.navigate(['inicio']);
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
          
        }
    );
  }

}
