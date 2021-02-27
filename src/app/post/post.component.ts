import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    saved: any = [];
  constructor() { }

  ngOnInit(): void {
  }
   // tslint:disable-next-line: typedef
   onadd(users: any){
     this.saved.push(users);
   }
}
