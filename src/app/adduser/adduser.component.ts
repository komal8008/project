import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users!: User[];
  private sb!: Subscription;
  constructor(private us: UserService, private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.users = this.us.showuser();

    this.sb = this.us.userchange.subscribe((user: User[]) => this.users = user);
    console.log(this.sb);
  }
  // tslint:disable-next-line: typedef
  adduser(f: NgForm){
       const data = new User (f.value.uname , f.value.email, f.value.number, f.value.designation);
       this.us.adduser(data);

       alert('data added');
  }
  // tslint:disable-next-line: typedef
  deleteuser(index: number){
    this.us.deleteuser(index);
    alert('Data deleted');
  }
  // tslint:disable-next-line: typedef
  edituser(index: number)
  {
      // this.router.navigateByUrl('/edituser');
      this.router.navigate(['/edituser'], {queryParams: {id: index}});
  }
}
