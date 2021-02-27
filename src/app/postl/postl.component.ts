import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postl',
  templateUrl: './postl.component.html',
  styleUrls: ['./postl.component.css']
})
export class PostlComponent implements OnInit {

  @Input() data: any = [];


  constructor() { }

  ngOnInit(): void {
  }

}
