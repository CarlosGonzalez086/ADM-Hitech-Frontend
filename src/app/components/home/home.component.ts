import { Component, OnInit,DoCheck  } from '@angular/core';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent implements OnInit ,DoCheck  {
  public identity:any;
  public token:any;
  constructor(
    private _userService:UserService
  ) {
    this.loaduser();
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
}
