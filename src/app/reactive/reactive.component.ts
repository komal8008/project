import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
   //myform!: FormGroup;
   submitted=false;
  constructor(private fb: FormBuilder) { }
  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cpassword: new FormControl('', Validators.required),
    terms: new FormControl(null, Validators.required)
  });
  ngOnInit(): void {
   /* this.myform = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', ],
      password: ['', [ Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
      terms: ['', Validators.required]
    });*/

  }
   get val()
   {
     return this.myform.controls ;
   }

  // tslint:disable-next-line: typedef
  submit(){
         this.submitted= true;
         if (this.myform.invalid)
         {
              return;
         }
         else {

        alert('sucess!!' + JSON.stringify(this.myform.value));

         }
  }
  // tslint:disable-next-line: typedef
  onReset(){
    this.submitted = false;
    this.myform.reset();
  }
}
