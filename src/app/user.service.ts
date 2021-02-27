import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    userchange = new Subject<User[]>();
    private newuser: User[] = [
      new User('komal', 'komal@gmailcom', '8877252243', 'tester'),
    ];
  constructor() { }
  // tslint:disable-next-line: typedef
  adduser(users: User)
  {
    this.newuser.push(users);
    this.userchange.next(this.newuser);
  }
  // tslint:disable-next-line: typedef
  showuser()
  {
    return this.newuser;
  }
  // tslint:disable-next-line: typedef
  deleteuser(index: number)
{
  this.newuser.splice(index, 1);
  this.userchange.next(this.newuser.slice());
}
// tslint:disable-next-line: typedef
selectuser(index: number){
     return this.newuser[index];
}
// tslint:disable-next-line: typedef
updateuser(index: number, values: User){
this.newuser[index] = values;
this.userchange.next(this.newuser);
}
}
