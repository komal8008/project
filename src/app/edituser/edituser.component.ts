import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
   index!: number;
   edituser!: User;
  constructor(private ar: ActivatedRoute, private us: UserService,
              private router: Router) { }
   @ViewChild('myform', {static: false})
    newform!: NgForm;
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.ar.queryParams.subscribe(params => {this.index = params['id']; } );
    console.log(this.index);
    this.edituser = this.us.selectuser(this.index);
    console.log(this.edituser);

    setTimeout(() => {
      this.newform.form.patchValue(
        {
          uname: this.edituser.name,
         email: this.edituser.email,
         number: this.edituser.contact,
         designation: this.edituser.designation
        });
    },  );


  }
  // tslint:disable-next-line: typedef
  onedit(form: NgForm){
    const uvalues = new User(form.value.uname, form.value.email, form.value.number, form.value.designation);
    this.us.updateuser(this.index, uvalues);
    this.router.navigateByUrl('/user');
  }

}
