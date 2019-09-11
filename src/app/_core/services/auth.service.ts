import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn
  constructor() {this.loggedIn() }

  loggedIn() {
    if(localStorage.getItem('user')){
      this.isLoggedIn = true
    }else{
      this.isLoggedIn = false
    }
  }
}
