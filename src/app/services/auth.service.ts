import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rt: Router) { }

  // tslint:disable-next-line: typedef
  onlogin(username: string){
     this.setuser(username);
     this.rt.navigateByUrl('/post');
  }
  // tslint:disable-next-line: typedef
  setuser(username: string)
  {
     localStorage.setItem('user', username);
  }
  // tslint:disable-next-line: typedef
  getuser(){
    return localStorage.getItem('user');
  }
  // tslint:disable-next-line: typedef
  removeuser(){
    localStorage.removeItem('user');
    alert('logout');
  }
  // tslint:disable-next-line: typedef
  isauth(){
      return localStorage.getItem('user') != null;
  }
}
