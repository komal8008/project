import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-postc',
  templateUrl: './postc.component.html',
  styleUrls: ['./postc.component.css']
})
export class PostcComponent implements OnInit {
    uname = '';
    message = '';
    @Output() newpost = new EventEmitter();
  constructor(private ar: AuthService) { }

  ngOnInit(): void {
    console.log(this.ar.getuser());
  }
  // tslint:disable-next-line: typedef
  onaddmessage(){
    const users = {uname: this.uname, mess: this.message};
    this.newpost.emit(users);
  }

}
