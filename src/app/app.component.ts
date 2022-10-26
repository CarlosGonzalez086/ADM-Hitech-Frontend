import { Component , OnInit, DoCheck} from '@angular/core';
import { UserService } from './services/user.services';
import { global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'ADMHitech-Frontend';
  public identity:any;
  public token:any;
  public url:any;
 
  public status:any;
  constructor(
    private _userService:UserService,
   
    
  ){
    this.loaduser();
    this.url = global.url;

  }
  ngDoCheck(): void {
    this.loaduser();
  }
  ngOnInit(): void {
  }
  loaduser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
