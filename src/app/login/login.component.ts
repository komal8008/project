import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login(f: NgForm){
         this.as.onlogin(f.value.uname);
  }
  // tslint:disable-next-line: typedef
  remove()
  {
    this.as.removeuser();
  }
}
