import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  type = 'password';
    vis = 'visibility_off';

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
// tslint:disable-next-line: typedef
submit(v: any)
{
  console.log(v);
  alert('success!!' + JSON.stringify(v));
}
// tslint:disable-next-line: typedef
visible()
{
  // tslint:disable-next-line: triple-equals
  this.type = (this.type == 'password' ? 'text' : 'password') ;
  // tslint:disable-next-line: triple-equals
  this.vis = (this.vis == 'visibility_off' ? 'visibility' : 'visibility_off');
}

}
