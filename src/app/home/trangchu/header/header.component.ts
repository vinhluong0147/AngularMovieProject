import { Component, OnInit,} from '@angular/core';
import { AuthService } from '../../../_core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logedIn;
  nguoiDung;
  constructor() { }

  ngOnInit() {
    this.LogIn()
  }

  LogIn(){
    if(localStorage.getItem('user')){
      this.logedIn = true;
      this.nguoiDung = localStorage.getItem('user')
    }else{
      this.logedIn = false;
    }
    
    
  }
  dangXuat(){
    localStorage.removeItem('user');
    this.logedIn = false;
  }

}

